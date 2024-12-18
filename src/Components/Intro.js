import * as React from "react";

import { mainFamily, novenaIntro, onOff } from "../assets";

import BrandLogo from "./BrandLogo";

import "./Components.css";

const Intro = () => {
  return (
    <div className="introModal">
      <div className="introContent">
        <BrandLogo src={onOff} />
        <div className="familyImage">
          <img src={mainFamily} alt="novena familiar" />
        </div>
        <div className="novenaImage">
          <img src={novenaIntro} alt="novena de aguinaldos" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
