import React from "react";
import styles from "../styles/Hero.module.css";

const HeroSection = () => {
  return (
    <section id="DSN Events Hero Section" className={styles.heroMainContainer}>
      <h2 className={styles.heroHeading}>
        Premier Event Management Company in Nellore
      </h2>
      <h3 className={styles.heroSubHeading}>
        {` With over 30 years of experience, DSN Events is the leading event
        management company in Andhra Pradesh. Whether it’s a grand celebration
        or an intimate gathering, we bring creativity, precision, and elegance
        to every occasion. Experience seamless planning and flawless execution
        tailored to perfection.`}
      </h3>
    </section>
  );
};

export default HeroSection;
