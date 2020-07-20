import React from "react";

import "./styles.css";
import myLogo from "../../assets/my.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="img">
        <img src={myLogo} alt="Logo" />
      </div>
      <div className="socials">
        <a href="https://github.com/RAJ66">
          <img className="social" src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/vitorbarbosa66/">
          <img className="social" src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
