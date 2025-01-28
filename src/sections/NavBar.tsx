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
    <nav id="DSN Events Nav" className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={`${styles.logo} macondo-regular`}>
          DSN Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
