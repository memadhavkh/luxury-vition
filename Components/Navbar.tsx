import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <>
      <RxCross1 className="absolute top-4 right-5 size-6" />
      <div className="flex justify-around items-center bg-[#FEFAF6] w-full h-[70vh] ">
        <div className="flex flex-col -translate-x-[135px] mt-[-100px]">
          <h3 className="text-[20px]">LOUIS VUITTON </h3>
          <video
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
          {/* <div className="overflow-hidden h-[4rem] relative elem">
            <h1 className="text-4xl font-normal absolute top-0 left-0 go-up">
              Women
            </h1>
            <h1 className="text-4xl font-normal absolute top-[100%] left-0 reveal">
              Women
            </h1>
          </div> */}
          <h1 className="text-[43px] leading-none font-normal mx-0 px-0">
            Women
          </h1>
          <h1 className="text-[43px] leading-none font-normal">Men</h1>
          <h1 className="text-[43px] leading-none font-normal">Bags</h1>
          <h1 className="text-[43px] leading-none font-normal">Watches</h1>
          <h1 className="text-[43px] leading-none font-normal">Perfumes</h1>
          <Button variant="outline" className="mt-5 border-black bg-[#FEFAF6]">
            Discover Collections
          </Button>
        </div>
      </div>

      <div className="bg-black w-[97%] h-[1px] mx-auto"></div>

      <div className="flex items-center py-2 justify-between mx-0 bg-[#FEFAF6]">
        <h2 className="font-light ml-5 text-[16px] text-black font-serif">
          Shop Smart, Live Well.
        </h2>
        <div className="flex items-center gap-2 mr-5 ">
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
    </>
  );
};
export default Navbar;
