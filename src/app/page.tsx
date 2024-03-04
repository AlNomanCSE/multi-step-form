import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <Sidebar active={1} />
      </section>
      <section className={styles.section2}></section>
    </main>
  );
}
