import React from "react";
import Image from "next/image";
import womanImg from "../../../../public/assets/woman.png";

import styles from "./Review.module.css";

interface ReviewProps {
  review: string;
  user: string;
}
const Review = ({ review, user }: ReviewProps) => {
  return (
    <section>
      <div className={styles.centeredContainer}>
        <Image src={womanImg} alt="White woman" />
      </div>
      <div className={styles.reviewContainer}>

        <h4 className={styles.reviewText}>
          <i>{review}</i>
        </h4>
        <p>{user}</p>
      </div>
    </section>
  );
};

export default Review;
