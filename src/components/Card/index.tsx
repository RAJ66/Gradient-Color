import React from "react";

import "./styles.css";
type Gradient = {
  color1: string;
  color2: string;
};

function Card({ color1, color2 }: Gradient) {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(
        90deg,
        ${color1} 0%,
        ${color2} 100%
      )`,
      }}
    >
      <h1>Card</h1>
    </div>
  );
}

export default Card;
