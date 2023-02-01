import React, { useState } from "react";
import styles from "./FeedbackSection.module.css";
import Headline from "../elements/headline/Headline";
import Review from "../elements/review/Review";

interface FeedbackProps {
  data: Record<string, string>[];
}
const FeedbackSection = ({ data }: FeedbackProps) => {
  const [review, setReview] = useState(0);

  return (
    <section className={styles.container}>
      <Headline
        title="Nuestra mejor referencia, nuestros clientes"
        body="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Review review={data[review].review} user={data[review].user} />

      <div className={styles.buttonsContainer}>
        <button
          onClick={() => setReview(0)}
          style={{
            border: review === 0 ? "1px solid #008bcf" : "none",
            backgroundColor: review === 0 ? "white" : "#dedede",
          }}
        />
        <button
          onClick={() => setReview(1)}
          style={{
            border: review === 1 ? "1px solid #008bcf" : "none",
            backgroundColor: review === 1 ? "white" : "#dedede",
          }}
        />
        <button
          onClick={() => setReview(2)}
          style={{
            border: review === 2 ? "1px solid #008bcf" : "none",
            backgroundColor: review === 2 ? "white" : "#dedede",
          }}
        />
      </div>
    </section>
  );
};

export default FeedbackSection;
