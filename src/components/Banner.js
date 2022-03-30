import React from "react";

const Banner = ({ imagen }) => {
  console.log(imagen);

  return (
    <div
      className="w-full mb-0 h-56 sm:h-auto"
      style={{ backgroundColor: "#eaddd7" }}
    >
      <img
        src={imagen}
        alt="banner"
        className="w-full h-full"
        style={{ overflow: "hidden" }}
      />
    </div>
  );
};

export default Banner;
