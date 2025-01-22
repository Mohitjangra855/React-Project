import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({y:"0"});
  };
  const handleHoverEnd = (index) => {
    cards[index].start({y:"100%"});
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 border-zinc-600 pb-20">
        <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects:
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full relative flex gap-20 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={()=>handleHoverEnd(0)}
            className="cardContainer w-1/2 rounded-xl h-[70vh] cursor-pointer  overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden top-1/2 left-1/2 text-[#ceeb67] uppercase -translate-x-[50%] display-none  -translate-y-[50%] text-6xl font-semibold tracking-tight z-20 leading-none">
              {"cardboard spaceship".split("").map((item, index) => {
                return <motion.span  intial={{ y: "100%" }}
                animate={cards[0]}   transition={{ ease: [0.22, 1, 0.36, 1] ,delay:index*.05}} 
                key={index} className="inline-block" >{item}</motion.span>;
              })}
            </h1>
            <img
              className="w-full h-full bg-green-400 rounded-xl hover:scale-95 ease-in duration-300"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt="card_image"
            />
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={()=>handleHoverEnd(1)} className="cardContainer w-1/2 rounded-xl h-[70vh] cursor-pointer  overflow-hidden">
            <img
              className="w-full h-full bg-green-400 rounded-xl hover:scale-95 ease-in duration-300"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt="card_image"
            />
            <h1 className="absolute flex overflow-hidden top-1/2 left-1/2 text-[#ceeb67] uppercase -translate-x-[50%] -translate-y-[50%] text-6xl font-semibold tracking-tight z-20 leading-none">
               {"AH2 &MATT HORN".split("").map((item, index) => {
                return <motion.span  intial={{ y: "100%" }}
                animate={cards[1]}   transition={{ ease: [0.22, 1, 0.36, 1] ,delay:index*.05}} 
                key={index} className="inline-block" >{item}</motion.span>;
              })}
            </h1>
            </motion.div>
        </div>
      </div>
    </div>
    // <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="card_image" />
  );
};

export default Featured;
