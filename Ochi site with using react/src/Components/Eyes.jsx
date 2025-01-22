import React from "react";
import Seyes from "./Seyes";

const Eyes = () => {
  return (
    <div className="eyes w-full h-screen relative overflow-hidden cursor-pointer">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] ">
        <Seyes name="Play"/>
      </div>
    </div>
  );
};

export default Eyes;
