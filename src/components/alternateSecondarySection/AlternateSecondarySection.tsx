import React from "react";
import Headline from "../elements/headline/Headline";
import styles from "./AlternateSecondarySection.module.css";

interface AlternateSecondarySectionProps {
  title: string;
  body: string;
}
const AlternateSecondarySection = ({
  title,
  body,
}: AlternateSecondarySectionProps) => {
  return (
    <section className={styles.centeredContainer}>
      <Headline body={body} title={title} />
    </section>
  );
};

export default AlternateSecondarySection;
