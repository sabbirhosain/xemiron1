import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "./ServiceOffer.css"

const ServiceOffer = ({ serviceOfferList }) => {
  return (
    <>
      <div className="card service_offer_card mb-4">
        <img src={serviceOfferList.serviceImage} className="card-img-top service_offer_img" alt="..." />
        <div className="d-flex align-items-center">
          <Link to={""} className="service_offer_btn">{serviceOfferList.servesTitle}
            <span className="service_offer_btn_icon"><FaArrowRight /></span>
          </Link>
        </div>

        <div className="service_offer_overlay">
          <Link to={"#"} className="service_offer_overlay_icon"><FaRegEye /></Link>
        </div>
      </div>
    </>
  )
}

export default ServiceOffer