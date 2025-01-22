import React, { useEffect, useState } from "react";

const Seyes = (props) => {
      const [rotate, setRotate] = useState(0);
      useEffect(() => {
        window.addEventListener("mousemove", (e) => {
          let mouseX = e.clientX;
          let mouseY = e.clientY;
          //deference.... represented by deltaX
          let deltaX = mouseX - window.innerWidth / 2;
          let deltaY = mouseY - window.innerHeight / 2;
          //calculate the angle of the mouse position relative to the center of the screen
          let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          setRotate(angle-180);
        });
      });
  return (
    <div>
      <div className="absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3  rounded-full bg-zinc-900">
            <h1 className="text-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase font-semibold text-2xl">{props.name}</h1>
            <div
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3  rounded-full bg-zinc-900">
            <h1 className="text-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] uppercase font-semibold text-2xl">{props.name}</h1>
              <div
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Seyes
