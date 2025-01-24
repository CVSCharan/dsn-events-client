import styles from "./page.module.css";
import Landing from "../sections/Landing";
import Navbar from "@/sections/NavBar";
import HeroSection from "@/sections/Hero";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import IntroSection from "@/sections/Intro";
import ServicesSection from "@/sections/Services";
import ContactSection from "@/sections/Contact";

export default function Home() {
  return (
    <main id="DSN Events Main">
      <Navbar />
      <div className={styles.mainBody}>
        <Landing />
        <HeroSection />
        <IntroSection />
        <ContactSection />
        <ServicesSection />
        <WhatsAppBtn />
      </div>
    </main>
  );
}
