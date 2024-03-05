"use client";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import PersonalInfo from "@/components/PersonalInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOnes from "@/components/AddOnes";
import FinishingUp from "@/components/FinishingUp";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  function stepIncrease() {
    if (step < 4) {
      setStep((pre) => pre + 1);
    } else {
      return;
    }
  }
  function stepDecrease() {
    if (step > 1) {
      setStep((pre) => pre - 1);
    } else {
      return;
    }
  }
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <Sidebar activeStep={step} />
      </section>
      <section className={styles.section2}>
        {step == 1 && <PersonalInfo />}
        {step == 2 && <SelectPlan />}
        {step == 3 && <AddOnes />}
        {step == 4 && <FinishingUp />}
        <section className={styles.buttons}>
          <button onClick={stepDecrease}>Go Back</button>
          <button onClick={stepIncrease}>Next Step</button>
        </section>
      </section>
    </main>
  );
}
