import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ParallaxSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Assets/one-world-trade.jpg")' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p>Description for Card 1</p>
        </div>
      </div>
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Assets/one-world-trade.jpg")' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p>Description for Card 1</p>
        </div>
      </div>
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Assets/one-world-trade.jpg")' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p>Description for Card 1</p>
        </div>
      </div>
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Assets/one-world-trade.jpg")' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p>Description for Card 1</p>
        </div>
      </div>
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Assets/one-world-trade.jpg")' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-lg font-semibold">Card 2</h3>
          <p>Description for Card 2</p>
        </div>
      </div>
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Assets/one-world-trade.jpg")' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
          <h3 className="text-lg font-semibold">Card 3</h3>
          <p>Description for Card 3</p>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default ParallaxSlider;
