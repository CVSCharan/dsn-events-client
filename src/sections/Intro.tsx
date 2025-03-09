"use client";

import { introBannerOneImages, introBannerTwoImages } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import styles from "../styles/Intro.module.css";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const IntroSection = () => {
  const [currentBannerOneImage, setCurrentBannerOneImage] = useState(0);
  const [currentBannerTwoImage, setCurrentBannerTwoImage] = useState(0);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const decorativeElementVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
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
    }, 5000);

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
    <section id="DSN Events Intro" className={styles.introSection}>
      <motion.div 
        className={styles.decorativeElement}
        variants={decorativeElementVariants}
        initial="hidden"
        animate="visible"
      >
        <LocalFloristIcon sx={{ fontSize: "30px", fill: "rgba(0,0,0,0.1)" }} />
      </motion.div>
      
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
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <motion.div 
              className={styles.imageBorder}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
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
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <motion.div 
              className={styles.imageBorder}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </div>
        </div>
        
        <div className={styles.descContainer}>
          <motion.div
            className={styles.headingWrapper}
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className={styles.introHeading}>
              Unlock Your Dream Destination Wedding
            </h2>
            <motion.div className={styles.headingUnderline} />
          </motion.div>
          
          <motion.h3 
            className={styles.introSubHeading}
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {`Make your dream destination wedding a reality with DSN Events, the
            premier choice for premium floral décor in Andhra Pradesh, India.
            Whether you envision a traditional ceremony or a luxurious resort
            celebration, we seamlessly blend rich traditions with modern
            elegance, crafting breathtaking floral arrangements that create
            unforgettable experiences.`}
          </motion.h3>
          
          <motion.h3 
            className={styles.introSubHeading}
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {`With our expertise in premium floral décor and meticulous attention
            to detail, DSN Events ensures a stress-free journey from concept to
            execution. Having served clients across PAN India, we are your
            trusted partner in curating breathtaking floral arrangements for a
            flawless wedding celebration in Andhra Pradesh.`}
          </motion.h3>
        </div>
        
        <div className={styles.btnContainer}>
          <motion.a
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={styles.button}
            href="tel:+91 8008190991"
          >
            <PhoneInTalkIcon sx={{ fontSize: "20px", fill: "#222" }} /> 
            <span>Talk to an expert</span>
          </motion.a>
          
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={styles.button}
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon sx={{ fontSize: "20px", fill: "#222" }} />
            <span>WhatsApp Us</span>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className={`${styles.decorativeElement} ${styles.bottomRight}`}
        variants={decorativeElementVariants}
        initial="hidden"
        animate="visible"
      >
        <LocalFloristIcon sx={{ fontSize: "30px", fill: "rgba(0,0,0,0.1)" }} />
      </motion.div>
    </section>
  );
};

export default IntroSection;