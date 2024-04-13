import Image from "next/image"
import { FaCirclePlay } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center border-b-black border-b-[1px] h-[50vh] w-screen">
        <div className="ml-20">
            <h3 className="text-2xl">LOUIS VUITTON</h3>
            <video autoPlay muted loop />
            <FaCirclePlay className='inline'/>
            <div className="flex items-center justify-between">
                <h4>Play reel</h4>
                <h4>-01:18</h4>
            </div>
        </div>
        <div className="mr-64">
            <h1 className="text-3xl font-semibold ">Women</h1>
            <h1 className="text-3xl font-semibold ">Men</h1>
            <h1 className="text-3xl font-semibold ">Bags</h1>
            <h1 className="text-3xl font-semibold ">Watches</h1>
            <h1 className="text-3xl font-semibold ">Perfumes</h1>
        </div>
    </div>
    <div className="flex items-center justify-around">
        <h2>Tagline</h2>
        <div>
            <h2>X</h2>
            <h2>Instagram</h2>
            <h2>Linkedin</h2>
        </div>
    </div>

    </>
  )
}
export default Navbar;
