import React from "react";
import styles from "./Filler.module.css";

interface FillerProps {
  width: number;
  height: number;
}
const Filler = ({ width, height }: FillerProps) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={styles.container}
    />
  );
};

export default Filler;
