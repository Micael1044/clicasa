import React, { useState } from "react";
import styles from "./Steps.module.css";
import Image from "next/image";
import Step from "../elements/step/Step";
import manImg from "../../../public/assets/man-laptop-big.png";

const Steps = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className={styles.whiteBackground}>
      <div className={styles.bigLayout}>
        <Step
          num="1"
          title="¡Ya está!"
          body="Firma la venta y recibe el dinero!"
          selected={"1" === selected}
          onClick={(num) => setSelected(num)}
        />
        <Step
          num="2"
          title="¡Ya está!"
          body="Firma la venta y recibe el dinero!"
          selected={"2" === selected}
          onClick={(num) => setSelected(num)}
        />
        <Step
          num="3"
          title="¡Ya está!"
          body="Firma la venta y recibe el dinero!"
          selected={"3" === selected}
          onClick={(num) => setSelected(num)}
        />
        <Step
          num="4"
          title="¡Ya está!"
          body="Firma la venta y recibe el dinero!"
          selected={"4" === selected}
          onClick={(num) => setSelected(num)}
        />
      </div>

      <div className={styles.tinyLayout}>
        <Step
          num="1"
          title="Descríbenos tu inmueble"
          body="No te preocupes de su estado, ni de reparaciones para eneseñarlo"
        />
        <Step num="2" title="Recibe una oferta en 24 horas" body="Piénsatela" />
        <Step
          num="3"
          title="Dinos hasta cuando quieres quedarte"
          body="Dinos hasta cuando quieres quedarte"
        />
        <Step
          num="4"
          title="¡Ya está!"
          body="Firma la venta y recibe el dinero!"
        />
      </div>

      <div className={styles.imgContainer}>
        <Image alt="Man typing on laptop" src={manImg} data-cy="bigImg"/>
      </div>
    </div>
  );
};

export default Steps;
