"use client";

import { introBannerOneImages, introBannerTwoImages } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import styles from "../styles/Intro.module.css";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const IntroSection = () => {
  const [currentBannerOneImage, setCurrentBannerOneImage] = useState(0);
  const [currentBannerTwoImage, setCurrentBannerTwoImage] = useState(0);

  const [isClient, setIsClient] = useState(false); // Track if the app is running on the client
  useEffect(() => {
    // Only run this code on the client side
    console.log(isClient);
    setIsClient(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerOneImage(
        (prev) => (prev + 1) % introBannerOneImages.length
      );

      setCurrentBannerTwoImage(
        (prev) => (prev + 1) % introBannerTwoImages.length
      );
    }, 5000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    if (isClient) {
      if (typeof window !== "undefined") {
        window.open("https://wa.me/918008190991", "_blank");
      }
    }
  };

  return (
    <section id="DSN Events Intro">
      <div className={styles.introMainContainer}>
        <div className={styles.bannerContainer}>
          {/* Banner One - Slide Left on Change */}
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentBannerOneImage}
                src={introBannerOneImages[currentBannerOneImage]}
                alt="DSN Events Intro Banner 1"
                className={styles.bannerOne}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>

          {/* Banner Two - Slide Right on Change */}
          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentBannerTwoImage}
                src={introBannerTwoImages[currentBannerTwoImage]}
                alt="DSN Events Intro Banner 2"
                className={styles.bannerTwo}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className={styles.descContainer}>
          <h2 className={styles.introHeading}>
            Unlock Your Dream Destination Wedding in Nellore
          </h2>
          <h3 className={styles.introSubHeading}>
            {` Make your dream destination wedding a reality with DSN Event
            Management, the premier choice in Andhra Pradesh, India. Whether you
            envision a traditional ceremony or a luxurious resort celebration,
            we seamlessly blend rich traditions with modern elegance to create
            unforgettable experiences.`}
          </h3>
          <h3 className={styles.introSubHeading}>
            {`With our expertise in venue selection and meticulous planning, we
            ensure a stress-free journey from concept to execution. Having
            served clients across PAN India, we are your trusted partner in
            curating a flawless wedding celebration in Andhra Pradesh.`}
          </h3>
        </div>
        <div className={styles.btnContainer}>
          <motion.a
            variants={cardVariants}
            viewport={{ once: false, amount: 0.4 }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={styles.button}
            href="tel:+91 8008190991"
          >
            <PhoneInTalkIcon sx={{ fontSize: "20px", fill: "white" }} /> Talk to
            an expert
          </motion.a>
          <motion.div
            variants={cardVariants}
            viewport={{ once: false, amount: 0.4 }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={styles.button}
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon sx={{ fontSize: "20px", fill: "white" }} />
            WhatsApp Us
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
