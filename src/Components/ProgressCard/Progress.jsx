import React from "react";
import bgImg from "../../assets/bgimage/vector1.png";
import bgImgi from "../../assets/bgimage/v2.png";
const Progress = ({taskAddedToStatus}) => {
  return (
    <div
      style={{
        backgroundImage: `  linear-gradient(to bottom right, #632ee3, #9f62f2),url(${bgImgi}), url(${bgImg})`,
        backgroundPosition: "left , right ",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
      className="p-10 rounded-lg bg-contain bg-center bg-no-repeat flex flex-col justify-center text-center bg-blend-overlay"
    >
      <h5 className="text-xl md:text-2xl text-white font-regular">
        In-Progress
      </h5>
      <h1 className="mt-4 text-3xl md:text-4xl lg:text-[60px] text-white font-semibold">
        {taskAddedToStatus.length}
      </h1>
    </div>
  );
};

export default Progress;
