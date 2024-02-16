import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ServiceCard.css"

const ServiceCard = ({ serviceProviceList }) => {
  return (
    <>
      <div class="card service_card mb-3">
        <div class="card-body">
          <img src={serviceProviceList.serviceIcon} className="img-fluid" alt="" />
          <h5 class="card-title">{serviceProviceList.serviceTitle}</h5>
          <p class="card-text">{serviceProviceList.serviceDescription}</p>
          <Link to={"#"} class="service_card_link"><FaArrowRight className="service_card_icon" /></Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCard