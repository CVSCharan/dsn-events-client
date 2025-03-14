"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Landing.module.css";
import { Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import { headContentAnimation, fadeAnimation } from "../utils/motion";
import { landingBannerImages } from "@/utils/helpers";

const Landing = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % landingBannerImages.length); // Cycle through images
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [landingBannerImages.length]);

  const logoVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section id="DSN Events Landing" className={styles.landing}>
      <div className={styles.imageContainer}>
        <Image
          src={landingBannerImages[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          fill
          sizes="100vw"
          className={styles.animatedImage}
          priority
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.h1
          className="josefin-sans-text"
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          DSN Events
        </motion.h1>
        <motion.p
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >{`Over 30+ years of Expertise`}</motion.p>
        <motion.p
          variants={logoVariant}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >{`A venture by Gowri Shankar Flower Decorators`}</motion.p>
        <div className={styles.socialIcons}>
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className={styles.icon} fontSize="large" />
          </a> */}
          <a
            href="https://www.instagram.com/dsnevents?igsh=c2ptNXpiMXM3cHJp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className={styles.icon} fontSize="large" />
          </a>
        </div>
        <motion.button
          {...headContentAnimation}
          className={styles.contactButton}
        >
          <a
            href="tel:+91 8008190991"
            className={`${styles.contactUs} josefin-sans-text`}
          >
            Contact Us
          </a>
        </motion.button>
        <motion.div {...fadeAnimation} className={styles.logoContainer}>
          <Image
            src="/Images/Logo_DSN.PNG"
            alt="Gowri Shankar Logo"
            height={200}
            width={200}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
