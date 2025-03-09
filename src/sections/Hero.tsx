"use client";

import React from "react";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

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
      <motion.div
        className={styles.decorElement}
        variants={decorVariants}
        initial="hidden"
        animate="visible"
      >
        <LocalFloristIcon
          sx={{ fontSize: "30px", fill: "rgba(65, 105, 225, 0.2)" }}
        />
      </motion.div>

      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.headingContainer}
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className={styles.heroHeading}>The Premier Floral Décors</h2>
          <div className={styles.headingUnderline}></div>
        </motion.div>

        <motion.h3
          className={styles.heroSubHeading}
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {`With over 30 years of expertise, DSN Events, a proud venture of Gowri
          Shankar Flower Decorators, is a premier provider of floral décor in Andhra
          Pradesh, India. Whether it's a grand celebration or an intimate
          gathering, we bring artistry, precision, and elegance to every floral
          arrangement. Experience seamless planning and flawless execution,
          ensuring breathtaking décor tailored to perfection.`}
        </motion.h3>
      </motion.div>

      <motion.div
        className={`${styles.decorElement} ${styles.bottomRight}`}
        variants={decorVariants}
        initial="hidden"
        animate="visible"
      >
        <LocalFloristIcon
          sx={{ fontSize: "30px", fill: "rgba(65, 105, 225, 0.2)" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
