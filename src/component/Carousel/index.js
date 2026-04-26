import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css"
const Carousel = () => {
  const settings = {
    dots: true,
    arrows : false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div className="slide-item">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777182688/GTAPEX_FLYER1_fopdc5.svg"
            alt="slide1"
          
          />
        </div>

        <div className="slide-item">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777182704/GTAPEX_FLYER2_1_lj51az.svg"
            alt="slide2"
          />
        </div>

        <div className="slide-item">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777182688/GTAPEX_FLYER1_fopdc5.svg"
            alt="slide3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
