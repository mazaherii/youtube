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
          <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook sag"></i></Link>              
          <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter soldan"></i></Link>

      </div>
  </div>
    </div>
  );
}
