import React from "react";
import bgImg from "../../assets/bgimage/vector1.png";
import bgImgi from "../../assets/bgimage/v2.png";
const Resolved = ({resolvedTask}) => {
  return (
    <div
      style={{
        backgroundImage: `
      linear-gradient(to right, #54cf68, #00827a),
      url(${bgImgi}),
      url(${bgImg})
    `,
            backgroundPosition: "left , right ",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
      className="p-10 rounded-lg bg-contain  bg-no-repeat bg-blend-overlay flex flex-col justify-center text-center"
    >
      <h5 className="text-xl md:text-2xl text-white">In-Resolved</h5>
      <h1 className="mt-4 text-3xl md:text-4xl lg:text-[60px] text-white font-semibold">
        {resolvedTask.length}
      </h1>
    </div>
  );
};

export default Resolved;
