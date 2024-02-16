import "./BlogsCard.css"
import Blogs1 from "../../../assets/Blogs1.png"
import { Link } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md";

const BlogsCard = () => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card mb-4">
          <div className="blogs_card_box">
            <div className="blogs_img"><img src={Blogs1} className="img-fluid" alt="Explore Blogs" /></div>
            <div className="blogs_text_box">
              <h5 className="blogs_title">Advanced Python Web Development</h5>
              <p className="blogs_text">Introduction: Welcome to the Advanced Python Web Development tutorial series...</p>
              <Link to={"#"} className="blogs_card_btn">Read More &ensp;<MdArrowOutward /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogsCard