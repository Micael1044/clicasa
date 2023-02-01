import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Advantage.module.css";

interface AdvantageProps {
  imgSrc: string | StaticImageData;
  title: string;
  body: string;
}

const Advantage = ({ imgSrc, body, title }: AdvantageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt="Icon" />
      </div>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Advantage;
