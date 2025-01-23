"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={`${styles.logo} macondo-regular`}>
          DSN Events
        </Link>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link href="/about-us" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/stories" onClick={() => setIsOpen(false)}>
              Stories
            </Link>
          </li>
          <li>
            <Link href="/function-hall" onClick={() => setIsOpen(false)}>
              Function Hall
            </Link>
          </li>
          <li>
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
