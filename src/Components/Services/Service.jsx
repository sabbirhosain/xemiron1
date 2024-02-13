import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "./Service.css"

const Service = ({ serviceList }) => {
  return (
    <>
      <div class="card service_card mb-4" style={{ width: "18rem;" }}>
        <img src={serviceList.serviceImage} class="card-img-top service_img" alt="..." />
        <div className="d-flex align-items-center">
          <Link to={""} className="service_btn">{serviceList.servesTitle}
            <span className="service_btn_icon"><FaArrowRight /></span>
          </Link>
        </div>

        <div class="service_overlay">
          <Link to={"#"} className="service_overlay_icon"><FaRegEye /></Link>
        </div>
      </div>
    </>
  )
}

export default Service