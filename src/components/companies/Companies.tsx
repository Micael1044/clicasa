import React from "react";
import Advantage from "../elements/advantage/Advantage";
import styles from "./Companies.module.css";
import houseImg from "../../../public/assets/icons/house2.png";
import inmoImg from "../../../public/assets/inmo.png";
import mapfreImg from "../../../public/assets/mapfre.png";
import Image from "next/image";

import Headline from "../elements/headline/Headline";

const Companies = () => {
  return (
    <div className={styles.container}>
      <Headline
        title="Trabajamos con las mejores empresas"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <div className={styles.imageContainer}>
        <Image alt="Mapfre company logo" src={mapfreImg}></Image>
        <Image alt="Inmoseguros company logo" src={inmoImg}></Image>
      </div>
    </div>
  );
};

export default Companies;
