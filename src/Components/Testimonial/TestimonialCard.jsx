import "./TestimonialCard.css"
import testimonial1 from "../../assets/testimonial/testimonial1.png"
import testimonial2 from "../../assets/testimonial/testimonial2.png"
import testimonial3 from "../../assets/testimonial/testimonial3.png"
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <>
      <div className="card testimonial_card">
        <div className="card-body px-4 py-5">
          <div className="d-flex align-items-center">
            <img src={testimonial1} alt="" />
            <div className="ms-3">
              <h6 className="testimonial_name">Muntasir Mahmud</h6>
              <small className="testimonial_country">India</small>
            </div>
          </div>
          <p className="pt-4 testimonial_description">Dialect is excellent - short and sweet and effective lessons and great quick review which is key to remembering. I love it! I’m learning Dutch!! I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.</p>
          <div className="d-flex align-items-center">
            <span className="testimonial_icon"><FaQuoteLeft /></span>
            <span className="testimonial_underline"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialCard