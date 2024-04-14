import React from "react";

const Loader = () => {
  return (
    <div className="loader bg-black absolute top-0 left-0 h-screen w-screen z-50 flex items-center justify-center transition-all duration-400 ease-in-out">
      <span className="inline-block text-white font-light">Shop</span>
      <span className="inline-block text-white font-light">Smart,</span>
      <span className="inline-block text-white font-light">Live</span>
      <span className="inline-block text-white font-light">Well.™</span>
    </div>
  );
};

export default Loader;
