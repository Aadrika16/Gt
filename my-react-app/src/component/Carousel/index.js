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
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777033797/GTAPEX_FLYER_j4pvja.png"
            alt="slide1"
          
          />
        </div>

        <div className="slide-item">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777033797/GTAPEX_FLYER_j4pvja.png"
            alt="slide2"
          />
        </div>

        <div className="slide-item">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777033797/GTAPEX_FLYER_j4pvja.png"
            alt="slide3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
