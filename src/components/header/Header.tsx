import React from "react";
import Image from "next/image";
import homeImg from "../../../public/assets/icons/home.png";
import arrowImg from "../../../public/assets/icons/arrow_down.png";
import playImg from "../../../public/assets/icons/play.png";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Vende tu piso en un <b>clic</b>
          <Image
            src={arrowImg}
            alt="Arrow pointing down"
            width={60}
            className={styles.arrow}
          />
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.inputContainer}>
            <Image src={homeImg} alt="tiny house" />
            <input
              placeholder="Introduce la dirección de tu casa o piso"
              className={styles.input}
            />
            <button className={styles.nestedBtn}>Vender mi inmueble</button>
          </div>
        </div>

        <button className={styles.btn}>Vender mi inmueble</button>
        <p className={styles.text}>
          Compramos tu casa directamente sin complicaciones ni preocupaciones.
        </p>
        <div className={styles.watchVideoContainer}>
          <div className={styles.watchVideoNestedContainer}>
            <p className={styles.watchVideoText}>Ver vídeo</p>

            <span className={styles.playContainer}>
              <Image src={playImg} width={16} height={20} alt="Play button" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
