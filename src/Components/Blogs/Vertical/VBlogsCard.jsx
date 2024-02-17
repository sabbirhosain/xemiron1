import { MdArrowOutward } from "react-icons/md"
import Blogs1 from "../../../assets/Blogs1.png"
import "./VBlogsCard.css"
import { Link } from "react-router-dom"
const VBlogsCard = () => {
  return (
    <>
      <div class="card mb-4 pb-2">
        <div class="card-body">
          <img src={Blogs1} class="blogs_card_img" alt="..." />
          <h5 className="blogs_title mt-3">Advanced Python Web Development</h5>
          <p className="blogs_text">Introduction: Welcome to the Advanced Python Web Development tutorial series...</p>
          <Link to={"/blog-details/123"} className="blogs_card_btn">Read More &ensp;<MdArrowOutward /></Link>
        </div>
      </div>
    </>
  )
}

export default VBlogsCard