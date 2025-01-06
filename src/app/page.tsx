import styles from "./page.module.css";
import Landing from "../sections/Landing";
import Navbar from "@/sections/NavBar";

export default function Home() {
  return (
    <main id="DSN Events Main">
      <Navbar />
      <div className={styles.mainBody}>
        <Landing />
      </div>
    </main>
  );
}
