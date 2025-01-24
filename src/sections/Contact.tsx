import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";

const ContactSection = () => {
  return (
    <section id="DSN Decors Contact" className={styles.contactMainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={"/Images/Contact-bg-img.jpg"}
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          className={styles.contactImg}
          priority
        />
        <div className={styles.overlay}></div>
      </div>

      <form className={styles.emailForm}>
        <h2>Looking for the Most Creative & Innovative Decors</h2>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Mobile No." required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={4} required></textarea>
          <button type="submit">
            Email
            <SendIcon sx={{ fill: "whitesmoke" }} />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
