"use client";

import React, { useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    if (!form.current) return;

    // Ensure environment variables are defined, otherwise throw an error
    const service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const public_key = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    if (!service_id || !template_id || !public_key) {
      console.error("Missing EmailJS environment variables.");
      setStatusMessage("Configuration error. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        service_id, // Service ID
        template_id, // Template ID
        form.current,
        public_key // Public Key
      );

      setStatusMessage("Message sent successfully! ✅");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="DSN Events Contact" className={styles.contactMainContainer}>
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

      <form ref={form} onSubmit={sendEmail} className={styles.emailForm}>
        <h2>Looking for the Most Creative & Innovative Decors</h2>
        <div className={styles.inputContainer}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="tel" name="mobile" placeholder="Mobile No." required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
            <SendIcon sx={{ fill: "whitesmoke" }} />
          </button>
        </div>
        {statusMessage && (
          <p className={styles.statusMessage}>{statusMessage}</p>
        )}
      </form>
    </section>
  );
};

export default ContactSection;
