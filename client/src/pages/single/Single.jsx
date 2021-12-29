import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <div>
    <div className="section">
      <div className="container">
        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <div className="page-wrapper">
            <div className="blog-title-area">
              <SinglePost/>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
    
  );
}
