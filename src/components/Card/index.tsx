import React from "react";

import "./styles.css";

const Card: React.FC = () => {
  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(
        90deg,
        rgba(1, 72, 115, 1) 0%,
        rgba(160, 234, 207, 1) 100%
      )`,
      }}
    >
      <h1>Card</h1>
    </div>
  );
};

export default Card;
