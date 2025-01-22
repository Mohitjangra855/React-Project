import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["WE create", "Eye opening", "Presentations"].map((item, index) => (
          <div className="masker overflow-hidden" key={index}>
            <div className="flex w-fit items-center">
            {index === 1 && (
              <motion.div initial={{width:0}} animate={{width:"7vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className=" relative bg-red-600 mr-4  h-[4vw]  rounded">
              <img className="w-full h-full relative rounded mr-1" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="text_image"/>
              </motion.div>
            )}
              <h1 className="flex items-center uppercase leading-[4.5vw] tracking-tighter text-7xl font-['Founders_Grotesk'] font-semibold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private compines", "From the first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 font-light text-md uppercase border-[2px] rounded-full border-zinc-500 cursor-pointer">
            start the project
          </div>
          <div className="w-10 flex items-center justify-center h-10 border-[2px] border-zinc-500 rounded-full ">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
