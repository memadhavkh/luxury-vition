"use client";
import React from "react";

const HomePage = () => {
  return (
    <div className="page1">
      <div className="menu">
  <div className="menu-header h-10 flex justify-between items-center px-3 mt-8">
    <h2>
      <a href="./index.html" className="text-black">Louis Vuitton</a>
    </h2>
    <h2 id="close">
      <a href="#" className="text-black">Close</a>
    </h2>
  </div>
  <div className="menu-sec flex justify-between items-center px-3">
    <div className="vid">
      <video autoPlay muted loop src="/Assets/LV-4.mp4" className="w-300 h-220 rounded-md"></video>
      <div className="play flex absolute left-0 bottom-5 gap-5">
        <i className="ri-play-circle-fill text-white"></i>
        <h5 id="play" className="text-white">Play Reel</h5>
        <h4 className="text-white ml-170">—01:18</h4>
      </div>
    </div>
    <div className="links flex flex-col justify-between">
      <h3 className="text-black text-3xl font-light cursor-pointer relative">Home</h3>
      <h3 className="text-black text-3xl font-light cursor-pointer relative">Work</h3>
      <h3 className="text-black text-3xl font-light cursor-pointer relative">Services & Models</h3>
      <h3 className="text-black text-3xl font-light cursor-pointer relative">About</h3>
      <h3 className="text-black text-3xl font-light cursor-pointer relative">Contact</h3>
      <button className="border border-black py-4 px-6 rounded-lg text-black text-xl cursor-pointer mt-6">Take a seat</button>
    </div>
  </div>
  <div className="menu-border h-px w-0 bg-black mt-16 mx-3"></div>
  <div className="small-links flex justify-between items-center px-3">
    <h4 className="text-black font-light">Tomorrow's Brands, Today.™</h4>
    <div className="social">
      <h3 className="text-black font-light">
        X <i className="ri-arrow-right-up-line"></i> Instagram{" "}
        <i className="ri-arrow-right-up-line"></i> LinkedIn{" "}
        <i className="ri-arrow-right-up-line"></i>{" "}
      </h3>
    </div>
  </div>
</div>

      <div className="cursor">
        <h4>Play Reel</h4>
      </div>
      <video autoPlay loop muted src="/Assets/LV-4.mp4"></video>
      <div className="inner-content">
        <nav>
          <h2>
            <a href="./index.html">The Venture Agency.</a>
          </h2>
          <h2 id="menu">
            <a href="#">Menu</a>
          </h2>
        </nav>
        <h1>
          <span>r</span>
          <span>e</span>
          <span>j</span>
          <span>o</span>
          <span>u</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
