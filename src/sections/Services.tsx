"use client";

import React from "react";
import styles from "../styles/Services.module.css";
import { servicesData } from "@/utils/helpers";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="DSN Events Services" className={styles.servicesMainContainer}>
      <div className={styles.decorativeLine}></div>

      <motion.div
        className={styles.servicesHeaderContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <h2 className={styles.servicesHeader}>OUR SERVICES</h2>
        <h2 className={styles.servicesHeading}>Services by DSN Events</h2>
        <div className={styles.headingUnderline}></div>
        <h3 className={styles.servicesSubHeading}>
          {`At DSN Events, we specialize in crafting extraordinary celebrations,
          ensuring every moment is cherished for a lifetime. From intimate
          gatherings to grand festivities, we provide seamless planning,
          creative execution, and impeccable service for a wide range of events.`}
        </h3>
      </motion.div>

      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <motion.div
            className={styles.servicesGrid}
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className={styles.servicesCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.imgSrc}
                  alt={`Services Img - ${service.category}`}
                  height={300}
                  width={300}
                  priority
                  className={styles.servicesImg}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.servicesInfo}>
                <h2 className={styles.servicesCategory}>{service.category}</h2>
                <div className={styles.categoryUnderline}></div>
                <h3 className={styles.servicesDesc}>{service.desc}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.decorativeLine}></div>
    </section>
  );
};

export default ServicesSection;
