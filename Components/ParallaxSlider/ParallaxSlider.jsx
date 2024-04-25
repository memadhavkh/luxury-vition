import Image from "next/image";
import image1 from "../../public/Assets/img-1.webp";
import image2 from "../../public/Assets/img-2.webp";
import image3 from "../../public/Assets/img-3.webp";
import image4 from "../../public/Assets/img-4.webp";
import image5 from "../../public/Assets/img-5.webp";
import image6 from "../../public/Assets/img-6.webp";
import 'swiper/css';
import './HeroSlider.css'
import { useState } from "react";
import Swiper from "react-id-swiper";

const ParallaxSlider = () => {
  const config = {
    containerClass: "swiper-container hero-slider",
    parallax: true,
    centeredSlides: true,
    grabCursor: true,
    speed: 500,
    spaceBetween: 0,
    effect: "slide",
  };
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <Swiper {...config} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src={image1} alt="" />
        </div>
      </div>
      <div className="">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src={image2} alt="" />
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src={image3} alt="" />
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src={image4} alt="" />
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src={image5} alt="" />
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <Image src={image6} alt="" />
        </div>
      </div>
      
    </Swiper>
  );
};

export default ParallaxSlider;
