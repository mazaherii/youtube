import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="container col-lg-6">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="row">	
      <div className="col-md-12">
										<div className="blog-box">
                    <div className="post-media">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      </div></div></div></div>
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}
