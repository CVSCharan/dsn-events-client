import Navbar from "@/sections/NavBar";
import React from "react";
import styles from "./page.module.css";

const AboutUsPage = () => {
  return (
    <main id="DSN Events About Us">
      <Navbar />
      <div className={styles.mainBody}>About Us</div>
    </main>
  );
};

export default AboutUsPage;
