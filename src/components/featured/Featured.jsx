import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Wanderlust Unleashed: Exploring the World One Adventure at a Time</h1>
          <p className={styles.postDesc}>
          {/* Embark on a journey with us as we share captivating travel tales, tips, and inspiration from around the globe. Join our wanderlust-fueled adventures and discover the beauty, culture, and hidden gems of diverse destinations. Whether you're a seasoned traveler or just dreaming of your next getaway, our travel blog is your passport to wanderlust and exploration. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
