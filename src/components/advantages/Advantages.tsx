import React from "react";
import Advantage from "../elements/advantage/Advantage";
import styles from "./Advantages.module.css";
import houseImg from "../../../public/assets/icons/house2.png";
import mglassImg from "../../../public/assets/icons/mglass.png";
import moneyImg from "../../../public/assets/icons/money.png";

import Headline from "../elements/headline/Headline";

const Advantages = () => {
  return (
    <div className={styles.whiteBackground}>
      <Headline
        title="En Clicpiso sólo hay ventajas"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className={styles.centeredContainer}>
        <Advantage
          title="Oferta en 24"
          body="No te preocupes de su estado, ni de reparaciones para eneseñarlo"
          imgSrc={houseImg}
        />
        <Advantage
          title="Compramos tu piso como esté"
          body="No te preocupes de su estado, ni de reparaciones para eneseñarlo"
          imgSrc={houseImg}
        />
        <Advantage
          title="Pago al instante"
          body="No te preocupes de su estado, ni de reparaciones para eneseñarlo"
          imgSrc={moneyImg}
        />
        <Advantage
          title="Te ayudamos con tu nueva casa"
          body="Si lo necesitas también podemos ayudarte a encontrar tu nuevo hogar"
          imgSrc={mglassImg}
        />
      </div>
    </div>
  );
};

export default Advantages;
