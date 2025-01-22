import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw]'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full  flex border-t-[1px] font-['Neue_Montreal'] pt-10 border-[#99ac54] mt-20">
        <div className="w-1/2 ">
          <h1 className="text-5xl">Our Approach:</h1>
          <button className="w-fit uppercase bg-[#212121] rounded-[3vw] mt-10 flex items-center justify-center  gap-5 text-[#d6d6d6] text-[1vw] px-8 py-3">
            read more{" "}
            <span className="bg-[#fcfafa] w-[0.8vw] h-[0.8vw] rounded-full"></span>{" "}
          </button>
        </div>
        <div className="w-1/2">
          <img className="rounded-3xl  h-[70vh] "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="default_image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
