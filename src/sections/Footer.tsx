import React from "react";
import styles from "../styles/Footer.module.css";
import { Instagram } from "@mui/icons-material";
// import Link from "next/link";

const FooterSection = () => {
  return (
    <footer id="DSN Decors Footer" className={styles.fotterMainContainer}>
      <div className={styles.fotterHeaderContainer}>
        <div className={styles.socialMediaIcons}>
          <a
            href="https://www.instagram.com/dsnevents?igsh=c2ptNXpiMXM3cHJp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className={styles.icon} fontSize="large" />
          </a>
        </div>
        <div className={styles.fotterHeader}>
          <h2 className={`${styles.fotterHeading} josefin-sans-text`}>
            DSN Decors
          </h2>
          <h3 className={styles.fotterSubHeading}>
            A venture by Gowri Shankar Flower Decorators
          </h3>
          <p className={styles.fotterPara}>
            {`At DSN Decors, we bring dreams to life with our exquisite event
            decoration services. With years of expertise in the industry, we
            specialize in creating stunning setups for weddings, receptions,
            corporate events, birthday celebrations, and more. Our team of
            skilled designers blends creativity with precision to transform
            ordinary spaces into breathtaking experiences.`}
          </p>
        </div>
      </div>
      {/* <div className={styles.fotterQuickLinksContainer}>
        <Link href="/" className={styles.quickLink}>
          Home
        </Link>
        <Link href="/about-us" className={styles.quickLink}>
          About Us
        </Link>
        <Link href="/services" className={styles.quickLink}>
          Services
        </Link>
        <Link href="/stories" className={styles.quickLink}>
          Stories
        </Link>
        <Link href="/function-hall" className={styles.quickLink}>
          Function Hall
        </Link>
        <Link href="/contact-us" className={styles.quickLink}>
          Contact Us
        </Link>
      </div> */}
      <h2 className={styles.fotterTxt}>
        © 2025 All rights reserved - DSN Decors
      </h2>
      <h3 className={styles.fotterSubTxt}>
        Designed and Developed with 💗 by CVS CHARAN
      </h3>
    </footer>
  );
};

export default FooterSection;
