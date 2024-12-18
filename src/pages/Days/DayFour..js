import * as React from "react";

import { dayfour } from "../../assets";

import DayImgDate from "../../Components/DayImgDate";
import Header from "../../Components/Header";
import Slide from "../../Components/Slide";

const DayFour = () => {
  return (
    <>
      <Header show={true} />
      <div className="steps">
        <DayImgDate image={dayfour} textImage="day four" />
        <h2>Día Cuarto</h2>
        <Slide />
        <div className="stepText">
          <p>
            Desde el seno de su madre comenzó el Niño Jesús a poner en práctica
            su entera sumisión a Dios, que continuó sin la menor interrupción
            durante toda su vida.
          </p>
          <p>
            Adoraba a su Eterno Padre, le amaba, se sometía a su voluntad,
            aceptaba con resignación el estado en que se hallaba conociendo toda
            su debilidad, toda su humillación, todas sus incomodidades.
          </p>
          <p>
            ¿Quién de nosotros quisiera retroceder a un estado semejante con el
            pleno goce de la razón y de la reflexión?, ¿quién pudiera sostener a
            sabiendas un martirio tan prolongado, tan penoso de todas maneras?.
          </p>
          <p>
            Por ahí entró el Divino Niño en su dolorosa y humilde carrera; así
            empezó a anonadarse delante de su Padre, a enseñarnos lo que Dios
            merece por parte de su criatura, a expiar nuestro orgullo, origen de
            todos nuestros pecados, y hacemos sentir toda la criminalidad y
            desórdenes del orgullo.
          </p>
          <p>
            Deseamos hacer una verdadera oración; empecemos por formarnos de
            ella una exacta idea contemplando al Niño en el seno de su madre, El
            Divino Niño ora y ora del modo más excelente.
          </p>
          <p>
            No habla, no medita ni se deshace en tiernos afectos. Su mismo
            estado, aceptado con la intención de honrar a Dios, es su oración y
            ese estado expresa altamente todo lo que Dios merece y de qué modo
            quiere ser adorado por nosotros.
          </p>
          <p>
            Unámonos a las oraciones del Niño Dios en el seno de María; unámonos
            al profundo abatimiento y sea este el primer afecto de nuestro
            sacrificio a Dios.
          </p>
          <p>
            Démonos a Dios, no para ser algo como lo pretende continuamente
            nuestra vanidad, sino para ser nada, para quedar eternamente
            consumidos y anonadados, para renunciar a la estimulación de
            nosotros mismos, a todo cuidado de nuestra grandeza aunque sea
            espiritual, a todo movimiento de vanagloria.
          </p>
          <p>
            Desaparezcamos a nuestros propios ojos y que Dios sólo sea todo para
            nosotros.
          </p>
        </div>
      </div>
    </>
  );
};

export default DayFour;
