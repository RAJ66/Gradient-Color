import React from "react";

import "./styles.css";
type Props = {
  color1: string;
  color2: string;
};

function Card({ color1, color2 }: Props) {
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
      <div className="color">
        <p
          onClick={() => {
            navigator.clipboard.writeText(color1);
            alert(`Copied ${color1}`);
          }}
        >
          {color1}
        </p>
        <p
          onClick={() => {
            navigator.clipboard.writeText(color2);
            alert(`Copied ${color2}`);
          }}
        >
          {color2}
        </p>
      </div>
    </div>
  );
}

export default Card;
