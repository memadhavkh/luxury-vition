"use client";
import React from "react";
import { useGlobalState } from "@/context/StateProvider";
import { RxHamburgerMenu } from "react-icons/rx";

const HomePage = () => {
  const { setMenu } = useGlobalState() as any;

  const handleMenu = () => {
    setMenu("active");
  };
  return (
    <div className="page1">
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
            <a href="#" onClick={handleMenu}>
              <RxHamburgerMenu className="text-[36px]" />
            </a>
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
