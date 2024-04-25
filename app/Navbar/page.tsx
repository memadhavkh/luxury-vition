import Image from "next/image"
import { FaCirclePlay } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import {motion} from 'framer-motion'
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center border-b-black border-b-[1px] w-[90%] h-[50vh] ml-16">
        <div className="">
            <h3 className="mb-3">LOUIS VUITTON</h3>
            <video src="/Assets/video2.mp4" className="w-[22vw] h-auto rounded-lg" loop muted autoPlay></video>

            <div className="flex items-center justify-between mt-5">
                <div className="flex">
                    <FaCirclePlay className="translate-y-1 mr-2"/>
                    <h4>Play reel</h4>
                </div>
                <h4>-01:18</h4>
            </div>
        </div>
        <div className="mr-[10rem] relative">
            <div className="overflow-hidden h-[4rem] relative elem">
                <h1 className="text-6xl font-normal absolute top-0 left-0 go-up">Women</h1>
                <h1 className="text-6xl font-normal absolute top-[100%] left-0 reveal">Women</h1>
            </div>
            <h1 className="text-6xl font-normal">Men</h1>
            <h1 className="text-6xl font-normal">Bags</h1>
            <h1 className="text-6xl font-normal">Watches</h1>
            <h1 className="text-6xl font-normal">Perfumes</h1>
        </div>
    </div>
    <div className="flex items-center py-1 justify-between">
        <h2 className="font-light ml-20 italic">Shop Smart, Live Well</h2>
        <div className="flex items-center gap-x-20 mr-24 ">
            <h2 className="flex">X <GoArrowUpRight className="translate-y-1"/></h2>
            <h2 className="flex">Instagram <GoArrowUpRight className="translate-y-1"/></h2>
            <h2 className="flex">Linkedin <GoArrowUpRight className="translate-y-1"/></h2>
        </div>
    </div>

    </>
  )
}
export default Navbar;
