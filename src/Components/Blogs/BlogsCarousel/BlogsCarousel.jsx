import Slider from "react-slick";
import "./BlogsCarousel.css"
import CarouselCard from "./CarouselCard";

const BlogsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
        <div>
          <CarouselCard />
        </div>
      </Slider>
    </div>
  )
}

export default BlogsCarousel