import React from "react";
import Seyes from "./Seyes";

const StartProject = () => {
  return (
    <div className='transition w-full h-[150vh]   text-zinc-900 flex items-center justify-center flex-col font-["Neue_Montreal"]  font-bold text-9xl uppercase tracking-tight bg-[#ceeb67] sticky -top-80 z-2 py-20'>
      <Seyes />
      {["ready", "to start", "The project?"].map((item, i) =>
        <h1>{item}</h1>
        )}
        <div className="flex gap-6 items-center flex-col justify-center mt-20 pt-20 text-2xl tracking-normal  font-medium">

        <button className=" py-2 px-5 bg-zinc-900 rounded-xl border-2 uppercase border-zinc-900  text-zinc-100">Start the Project</button>
        <span>OR</span>
        <button className=" py-2 px-5 bg-zinc-100 rounded-xl border-2 uppercase border-zinc-900  text-zinc-900">Hello@ochi.design</button>
        </div>
    </div>
  );
};

export default StartProject;
