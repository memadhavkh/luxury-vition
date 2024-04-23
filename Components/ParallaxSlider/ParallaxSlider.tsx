import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Flickity from "react-flickity-component";

const ParallaxSlider = () => {
  const carouselRef = React.useRef(null);

  const imageSrc = [
    {
      index: 1,
      imgUrl: "/Assets/img-1.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-2.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-3.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-4.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-5.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
    {
      index: 1,
      imgUrl: "/Assets/img-6.webp",
      title: "Men's Shoes",
      subtitle: "Explore the Selection",
    },
  ];

  const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    autoPlay: 3000,
    pageDots: false,
    prevNextButtons: false,
    draggable: true,
    pauseAutoPlayOnHover: false,
    selectedAttraction: 0.01,
    friction: 0.15,
    ParallaxSlider: true,
  };

  var carouselElement = carouselRef.current;

  

  return (
    <Flickity
      ref={carouselRef}
      className={"carousel w-screen overflow-hidden"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {imageSrc.map((image) => (
        <div
          className="carousel-cell tricks-slider_slide overflow-hidden flex flex-col"
          key={image.index}
        >
          <Image
            src={image.imgUrl}
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 88vw, 74vw"
            alt=""
            className="image object-cover m-3 mt-10"
            height={1000}
            width={400}
          />

          <span className="flex flex-col gap-4 ml-4 ">
            <h2>Women’s Monogram Bags</h2>

            <h2 className="underline text-sm">Explore the Selection​</h2>
          </span>
        </div>
      ))}
    </Flickity>
  );
};

export default ParallaxSlider;
