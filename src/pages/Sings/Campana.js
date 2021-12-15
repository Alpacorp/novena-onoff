import * as React from 'react';
import Back from '../../Components/Back';
import backButtonIcon from '../../assets/components/volver.svg';

const Campana = () => {
  return (
    <>
      <div className="steps">
        <Back url='/stepseven' src={backButtonIcon} />
        <h2>Campana sobre campana</h2>
        <div className="video">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/IhO3Y1unYGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
};

export default Campana;