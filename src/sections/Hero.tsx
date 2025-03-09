import React from "react";
import styles from "../styles/Hero.module.css";
// Make sure you have framer-motion installed and imported correctly
import { motion } from "framer-motion";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const decorVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <section id="DSN Events Hero Section" className={styles.heroMainContainer}>
      <div className={styles.decorElement}>
        <div className={styles.floralIcon}>✿</div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heroHeading}>The Premier Floral Décors</h2>
          <div className={styles.headingUnderline}></div>
        </div>

        <h3 className={styles.heroSubHeading}>
          {`With over 30 years of expertise, DSN Events, a proud venture of Gowri
          Shankar Flower Decorators, is a premier provider of floral décor in Andhra
          Pradesh, India. Whether it's a grand celebration or an intimate
          gathering, we bring artistry, precision, and elegance to every floral
          arrangement. Experience seamless planning and flawless execution,
          ensuring breathtaking décor tailored to perfection.`}
        </h3>
      </div>

      <div className={`${styles.decorElement} ${styles.bottomRight}`}>
        <div className={styles.floralIcon}>✿</div>
      </div>
    </section>
  );
};

export default HeroSection;
