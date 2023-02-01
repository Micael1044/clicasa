import React from "react";
import Image from "next/image";
import styles from "./Step.module.css";
import manImg from "../../../../public/assets/man-laptop.png";

interface StepProps {
  onClick?: (num: string) => void;
  num: string;
  title: string;
  body: string;
  selected?: boolean;
}

const Step = ({ onClick, num, body, title, selected }: StepProps) => {
  return (
    <>
      {onClick !== undefined && selected !== undefined ? (
        <div
          data-testid="step-container"
          className={styles.container}
          style={{ borderBottom: selected ? "5px solid #008bcf" : "none", backgroundColor:  selected ? "white" : "#FBFBFB" }}
          onClick={() => onClick(num)}
        >
          <div className={styles.stepNum}>{num}</div>
          <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.stepNum}>{num}</div>
            <div className={styles.textContainer}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image src={manImg} alt="Man typing on laptop" />
          </div>
        </>
      )}
    </>
  );
};

export default Step;
