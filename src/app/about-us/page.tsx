"use client";

import Navbar from "@/sections/NavBar";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main id="DSN Events About Us">
      <Navbar />
      <div className={styles.mainBody}>
        {/* Hero Section */}
        <section id="about-hero" className={styles.heroSection}>
          <motion.h1
            className={styles.heroTitle}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
          >
            DSN Events
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
          >
            Over 30+ years of Expertise
          </motion.p>
          <motion.p
            className={styles.heroSubtitle}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
          >
            A Venture by Gowri Shankar Flower Decorators
          </motion.p>
        </section>

        {/* Content Sections */}
        <section className={styles.contentSection}>
          <motion.div
            className={styles.contentWrapper}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p className={styles.sectionText}>
              At DSN Events, we believe in transforming your dreams into
              unforgettable experiences. With a passion for creativity and
              precision, we specialize in curating extraordinary events that
              leave lasting impressions. Whether it’s a grand wedding, a
              corporate gathering, or a private celebration, we bring your
              vision to life with elegance and excellence.
            </p>
          </motion.div>

          <motion.div
            className={styles.contentWrapper}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <p className={styles.sectionText}>
              DSN Events is a premier event management company dedicated to
              delivering seamless, innovative, and personalized experiences. Our
              team of seasoned professionals ensures that every detail is
              meticulously planned and executed, turning your special moments
              into cherished memories.
            </p>
          </motion.div>

          <motion.div
            className={styles.contentWrapper}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className={styles.sectionTitle}>Our Expertise</h2>
            <p className={styles.sectionText}>
              From conceptualization to execution, we handle every aspect of
              event planning, including weddings, corporate events, and social
              celebrations. Our expertise lies in blending tradition with modern
              elegance to create truly unique experiences.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default AboutUsPage;
