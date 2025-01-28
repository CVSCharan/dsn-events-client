"use client";

// import { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav id="DSN Decors Nav" className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={`${styles.logo} macondo-regular`}>
          DSN Decors
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
