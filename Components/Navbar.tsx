"use client";
import { FaCirclePlay } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
// import { GoArrowRight } from "react-icons/go";
// import { m, motion } from "framer-motion";
import { Button } from "./ui/button";
// import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useGlobalState } from "@/context/StateProvider";

const Navbar = () => {
  const video = useRef<HTMLVideoElement | null>(null);
  const playReel = useRef<HTMLDivElement | null>(null);
  const smallLinks = useRef<HTMLDivElement | null>(null);
  const smallLink = useRef<HTMLDivElement | null>(null);
  const border = useRef<HTMLDivElement | null>(null);

  const { menu, setMenu } = useGlobalState() as any;

  useGSAP(() => {
    gsap.from(video.current, {
      scale: 0.1,
      duration: 1,
      ease: "none",
    });
    gsap.from(playReel.current, {
      y: -100,
      duration: 1.1,
    });
    gsap.from(smallLinks.current, {
      x: 200,
      duration: 2,
      delay: -0.4,
    });
    gsap.from(smallLink.current, {
      x: 200,
      duration: 2,
      delay: -0.4,
    });
    gsap.to(border.current, {
      width: 95 + "vw",
      duration: 1.5,
      delay: -0.1,
    });
  }, [menu]);

  useGSAP(() => {
    gsap.from(" .Links ", {
      y: 100,
      duration: 0.7,
      stagger: 0.1,
    });
  }, [menu]);

  return (
    <div
      style={{
        maxHeight: menu === "active" ? "80vh" : "0",
        transition: "max-height 0.5s ease",
        overflow: "hidden",
        position: "absolute",
        zIndex: 10,
        width: "100vw",
      }}
    >
      <span ref={playReel}>
        <RxCross1
          className="absolute top-6 right-8 size-6"
          onClick={() => {
            setMenu("inactive");
          }}
        />
      </span>

      <div className="flex justify-around items-center bg-[#FEFAF6] w-full h-[70vh] ">
        <div className="flex flex-col -translate-x-[135px] mt-[-100px]">
          <h3 className="text-[20px]">LOUIS VUITTON </h3>
          <video
            ref={video}
            src="/Assets/LV-2.mp4"
            className="w-[22vw] h-auto rounded"
            loop
            muted
            autoPlay
          ></video>

          <div className="flex items-center justify-between mt-5">
            <div className="flex">
              <FaCirclePlay className="translate-y-1 mr-2" />
              <h4>Play reel</h4>
            </div>
            <h4>-01:18</h4>
          </div>
        </div>

        <div className="flex flex-col mr-[10rem] relative mt-[-10px]">
          <h1 className="Links text-[43px] leading-none font-normal ">Women</h1>
          <h1 className="Links text-[43px] leading-none font-normal">Men</h1>
          <h1 className="Links text-[43px] leading-none font-normal">Bags</h1>
          <h1 className="Links text-[43px] leading-none font-normal">
            Watches
          </h1>
          <h1 className="Links text-[43px] leading-none font-normal">
            Perfumes
          </h1>
          <Button
            variant="outline"
            className="Links mt-5 border-black bg-[#FEFAF6]"
          >
            Discover Collections
          </Button>
        </div>
      </div>

      <div ref={border} className="bg-black w-[97%] h-[1px] mx-auto"></div>

      <div className="flex items-center py-2 justify-between mx-0 bg-[#FEFAF6]">
        <h2
          ref={smallLink}
          className="font-light ml-5 text-[16px] text-black font-serif"
        >
          Shop Smart, Live Well.™
        </h2>
        <div ref={smallLinks} className="flex items-center gap-2 mr-5 ">
          <h2 className="flex">
            X <GoArrowUpRight className="translate-y-1" />
          </h2>
          <h2 className="flex">
            Instagram <GoArrowUpRight className="translate-y-1" />
          </h2>
          <h2 className="flex">
            Linkedin <GoArrowUpRight className="translate-y-1" />
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
