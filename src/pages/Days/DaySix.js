import * as React from "react";

import { daysix } from "../../assets";

import DayImgDate from "../../Components/DayImgDate";
import Header from "../../Components/Header";
import Slide from "../../Components/Slide";

const DaySix = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={daysix} textImage="day six" />
        <h2>Día Sexto</h2>
        <Slide />
        <div className="stepText">
          <p>
            Jesús había sido concebido en Nazaret, domicilio de José y María, y
            allí era de creerse que había de nacer, según todas las
            probabilidades.
          </p>
          <p>
            Mas Dios lo tenía dispuesto de otra manera y los profetas habían
            anunciado que el mesías nacería en Belén de Judá, ciudad de David.
          </p>
          <p>
            Para que se cumpliese esa predicción, Dios se sirvió de un medio que
            no parecía tener ninguna relación con este objeto, a saber la orden
            dada por el emperador Augusto, que todos los súbditos del imperio
            romano se empadronasen en el lugar de donde eran originarios.
          </p>
          <p>
            María y José, como descendientes que eran de David, no estaban
            dispensados de ir a Belén. Ni la situación de la Virgen Santísima ni
            la necesidad en que estaba José del trabajo diario que les aseguraba
            la subsistencia, pudo eximirles de este largo y penoso viaje, en la
            estación más rigurosa e incómoda del año.
          </p>
          <p>
            No ignora Jesús en que lugar debe nacer e inspira a sus padres que
            se entreguen a la Providencia, y que de esta manera concurran
            inconscientemente a la ejecución de los designios.
          </p>
          <p>
            Almas interiores, observad este manejo del Divino Niño, porque es el
            más importante de la vida espiritual; aprended que quien se haya
            entregado a Dios ya no ha de pertenecerse a sí mismo, ni ha de
            querer a cada instante sino lo que Dios quiera para él; siguiéndole
            ciegamente aun en las cosas exteriores, tales como el cambio de
            lugar donde quiera que le plazca conducirle.
          </p>
          <p>
            Ocasión tendréis de observar esta dependencia y fidelidad inviolable
            en toda la vida de Jesucristo, y este es el punto sobre el cual se
            han esmerado en imitarle los santos y las almas verdaderamente
            interiores, renunciando absolutamente a su propia voluntad.
          </p>
        </div>
      </div>
    </>
  );
};

export default DaySix;
