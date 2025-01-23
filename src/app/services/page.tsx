import React from "react";
import styles from "./page.module.css";
import Navbar from "@/sections/NavBar";

const ServicesPage = () => {
  return (
    <main id="DSN Events Services">
      <Navbar />
      <div className={styles.mainBody}>Services</div>
    </main>
  );
};

export default ServicesPage;
