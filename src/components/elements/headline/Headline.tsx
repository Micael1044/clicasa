import React from "react";
import styles from "./Headline.module.css";

interface HeadlineProps {
  title: string;
  body: string;
}

const Headline = ({ title, body }: HeadlineProps) => {
  return (
    <section className={styles.centeredContainer}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </section>
  );
};

export default Headline;
