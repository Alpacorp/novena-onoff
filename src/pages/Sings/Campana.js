import * as React from "react";

import Back from "../../Components/Back";
import Header from "../../Components/Header";

import backButtonIcon from "../../assets/components/volver.svg";

const Campana = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <Back url="/stepseven" src={backButtonIcon} />
        <h2>Campana sobre campana</h2>
        <div className="video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/IhO3Y1unYGE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Campana;
