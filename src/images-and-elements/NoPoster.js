import React from "react";
import image from "./no-poster.jpg";

const style1 = {
  maxWidth: "100%",
  height: "100%",
  border: "1px solid #090909",
};

export const NoPoster = ({ width, height }) => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <img src={image} style={style1} alt="This is poster" />
    </div>
  );
};
