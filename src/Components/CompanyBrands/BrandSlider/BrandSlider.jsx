import company1 from "../../../assets/company/company1.png"
import company2 from "../../../assets/company/company2.png"
import company3 from "../../../assets/company/company3.png"
import company4 from "../../../assets/company/company4.png"
import company5 from "../../../assets/company/company5.png"

import Slider from "react-slick";
import "./BrandSlider.css"

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="brand_slider_container">
      <Slider {...settings}>
        <div className="text-center px-3">
          <img src={company1} className="img-fluid" alt="" />
        </div>
        <div className="text-center px-3">
          <img src={company2} className="img-fluid" alt="" />
        </div>
        <div className="text-center px-3">
          <img src={company3} className="img-fluid" alt="" />
        </div>
        <div className="text-center px-3">
          <img src={company4} className="img-fluid" alt="" />
        </div>
        <div className="text-center px-3">
          <img src={company5} className="img-fluid" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default BrandSlider