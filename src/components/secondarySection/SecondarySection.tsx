import React from "react";

import styles from "./SecondarySection.module.css";

interface SecondarySectionProps {
  title: string;
  body: string;
  buttonText: string;
}
const SecondarySection = ({
  title,
  body,
  buttonText,
}: SecondarySectionProps) => {
  return (
    <section className={styles.centeredContainer}>
      <h3 className={styles.title}>{title}</h3>

      <p>{body}</p>

      <div>
        <button className={styles.btn} onClick={() => alert("Button clicked")}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default SecondarySection;
