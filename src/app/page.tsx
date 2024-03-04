import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import PersonalInfo from "@/components/PersonalInfo";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <Sidebar active={1} />
      </section>
      <section className={styles.section2}>
        <PersonalInfo />
        <section className={styles.buttons}>
          <button className={styles.back}>Go Back</button>
          <button className={styles.next}>Next Step</button>
        </section>
      </section>
    </main>
  );
}
