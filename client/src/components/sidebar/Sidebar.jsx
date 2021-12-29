import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
    
      <div className="sidebarItem">
        <h4 className="widget-title">Categories</h4>
        <ul className="blog-list-widget">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="list-group">
            <li className="list-group-item list-group-item-action flex-column align-items-start">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="widget">
      <h4 className="widget-title">Follow Us:</h4>

          <div className="social">
          <a href="https://tr-tr.facebook.com/YildizEdu/" target={'_blank'} data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook sag"></i></a>              
          <a href="https://twitter.com/YildizEdu?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={'_blank'} data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter soldan"></i></a>

      </div>
  </div>
    </div>
  );
}
