import React from "react";
import styles from "../styles/Hero.module.css";

const HeroSection = () => {
  return (
    <section id="DSN Events Hero Section" className={styles.heroMainContainer}>
      <h2 className={styles.heroHeading}>The Premier Floral Décors</h2>
      <h3 className={styles.heroSubHeading}>
        {`With over 30 years of expertise, DSN Events, a proud venture of Gowri
        Shankar Flower Decorators, is a premier provider of floral décor in Andhra
        Pradesh, India. Whether it’s a grand celebration or an intimate
        gathering, we bring artistry, precision, and elegance to every floral
        arrangement. Experience seamless planning and flawless execution,
        ensuring breathtaking décor tailored to perfection.`}
      </h3>
    </section>
  );
};

export default HeroSection;
