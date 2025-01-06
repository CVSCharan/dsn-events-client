"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Landing.module.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Landing = () => {
  const images = [
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides11.jpeg?raw=true",
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides10.jpeg?raw=true",
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides8.jpeg?raw=true",
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides3.jpeg?raw=true",
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides4.jpeg?raw=true",
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides5.jpeg?raw=true",
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides6.jpeg?raw=true",
    "https://github.com/CVSCharan/dsn-events-assets/blob/main/Landing-Slides7.jpeg?raw=true",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="Landing" className={styles.landing}>
      <div className={styles.imageContainer}>
        <Image
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          fill
          sizes="100vw"
          className={styles.animatedImage}
          priority
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className="josefin-sans-text">DSN Events</h1>
        <p>A Gowri Shankar's Venture</p>
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className={styles.icon} fontSize="large" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className={styles.icon} fontSize="large" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className={styles.icon} fontSize="large" />
          </a>
        </div>
        <button
          className={styles.contactButton}
          onClick={() => alert("Contact Form Coming Soon!")}
        >
          <h2 className={`${styles.contactUs} josefin-sans-text`}>
            Contact Us
          </h2>
        </button>
        <div className={styles.logoContainer}>
          <Image
            src="/Images/GowriShankarLogo.jpeg"
            alt="Gowri Shankar Logo"
            height={150}
            width={150}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
