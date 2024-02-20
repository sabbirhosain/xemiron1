import { Link } from "react-router-dom"
import "./CarouselCard.css"
import { MdArrowOutward } from "react-icons/md"

const CarouselCard = () => {
  return (
    <>
      <div className="blog_bg_img">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div>
                <h6>Python Resources</h6>
                <h1>Python Learning Resources</h1>
                <p>Introduction: As a bonus to conclude our Python tutorial series, we ve
                  curated a list of top resources to support your continued learning …</p>
                <Link to={"/blog-details/123"} className="blogs_card_btn">Read More &ensp;<MdArrowOutward /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselCard