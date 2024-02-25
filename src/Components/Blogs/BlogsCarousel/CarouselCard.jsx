import { Link } from "react-router-dom"
import "./CarouselCard.css"
import { MdArrowOutward } from "react-icons/md"

const CarouselCard = () => {
  return (
    <>
      <div className="blog_bg_img">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xxl-5">
              <div>
                <h6 className="blogs_banner_sm_title">Python Resources</h6>
                <h1 className="blogs_banner_title">Python Learning Resources</h1>
                <p className="blogs_banner_paragraph">Introduction: As a bonus to conclude our Python tutorial series, we ve
                  curated a list of top to support your continued learning …</p>
                <Link to={"/blogs"} className="blogs_banner_btn">Read More &ensp;<MdArrowOutward /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselCard