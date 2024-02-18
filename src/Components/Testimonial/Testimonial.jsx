import { useRef } from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Testimonial.css"

// coustome next arrow
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}></div>
  );
}

// coustome prev arrow
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick}></div>
  );
}

const Testimonial = () => {
  const slider = useRef(null);

  const settings = {
    centerMode: true,
    // centerPadding: "100px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="slider-container">
        <Slider ref={slider} {...settings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div >
      <div className="mt-5 d-flex align-items-center">
        <button className="testimonial_btn me-1" onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack /></button>
        <button className="testimonial_dots"></button>
        <button className="testimonial_dots active mx-2"></button>
        <button className="testimonial_dots"></button>
        <button className="testimonial_btn ms-1" onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
      </div>
    </>
  );
}

export default Testimonial