import React from "react";
import styles from "./page.module.css";
import Navbar from "@/sections/NavBar";

const StoriesPage = () => {
  return (
    <main id="DSN Events Stories">
      <Navbar />
      <div className={styles.mainBody}>Stories</div>
    </main>
  );
};

export default StoriesPage;
