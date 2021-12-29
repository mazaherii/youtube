import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="col-lg-12 write">
      <div className="writeImg">
			<img src="https://dersaadetcafe.com/cdn/new-post.jpg" className="writeImg" />
			</div>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup col-lg-12">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeCategories">
          <label for="subject">Blog Kategorisi  </label>
              <select id="subject" name="subject" onChange={e=>setSubject(e.target.value)} >
              <option value="yazilim">Yazılım</option>
              <option value="teknoloji">Teknoloji</option>
              <option value="muzik">Müzik</option> 
              <option value="gundem">Gündem</option>
              <option value="havadis">Havadis</option>
              <option value="diger">Diğer</option>
              </select>

        </div>
        <div className="writeFormGroup col-lg-12">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="gangeri" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
