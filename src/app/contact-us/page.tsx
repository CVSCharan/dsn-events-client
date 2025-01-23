import React from "react";
import styles from "./page.module.css";
import Navbar from "@/sections/NavBar";

const ContactUsPage = () => {
  return (
    <main id="DSN Events Contact Us">
      <Navbar />
      <div className={styles.mainBody}>Contact Us</div>
    </main>
  );
};

export default ContactUsPage;
