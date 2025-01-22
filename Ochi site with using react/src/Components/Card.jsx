import React from "react";

const Card = (props) => {
  return (
    <div className="cardContainer h-96 " style={{ width: `${props.width}` }}>
      <div
        className="card w-full rounded-xl flex flex-col items-center justify-evenly text-black h-full relative"
        style={{ backgroundColor: `${props.bgcolor}` }}
      >
        {props.text ? (
          <h1
            className="text-zinc-100 text-8xl font-semibold  "
            style={{ color: `${props.textColor}` }}
          >
            {props.text}
          </h1>
        ) : (
          <img src={props.img} className="w-32 h-24-" alt="default_image" />
        )}

        <p
          className={`border-2 rounded-full uppercase font-semibold absolute bottom-8 left-8 py-2 px-3 hover:bg-zinc-100 cursor-pointer border-[${props.textColor}] text-[${props.textColor}]`}
          onMouseEnter={(e) => (e.target.style.color = "black")} 
          onMouseLeave={(e) => (e.target.style.color = `${props.textColor}`)}
          style={{
            transition: "color 0.3s ease", 
          }}
        >
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default Card;
