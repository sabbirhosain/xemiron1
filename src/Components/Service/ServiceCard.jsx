import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ServiceCard.css"

const ServiceCard = ({ serviceProviceList }) => {
  return (
    <>
      <div class="card service_card mb-4 p-2">
        <div class="card-body">
          <img src={serviceProviceList.serviceIcon} className="service_card_img" alt="" />
          <h4 class="service_card_title">{serviceProviceList.serviceTitle}</h4>
          <p class="service_card_paragraph">{serviceProviceList.serviceDescription}</p>
          <Link to={"#"} class="service_card_link"><FaArrowRight className="service_card_icon" /></Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCard