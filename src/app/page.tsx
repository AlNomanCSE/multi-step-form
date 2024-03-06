"use client";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import PersonalInfo from "@/components/PersonalInfo";
import SelectPlan from "@/components/SelectPlan";
import AddOnes from "@/components/AddOnes";
import FinishingUp from "@/components/FinishingUp";
import { useState } from "react";
import FinalPage from "@/components/FinalPage";

type CardType = {
  title: string;
  pricing: number;
  time: string;
};
export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [card, setCard] = useState<CardType>({
    title: "Arcade",
    pricing: 9,
    time: "mo",
  });
  const [addOnes, setAddons] = useState<CardType[]>([]);
  function updateAddOnes(newAddons: Array<CardType>) {
    setAddons([...newAddons]);
  }
  function updateCard({ title, pricing, time }: CardType) {
    setCard({ title, pricing, time });
  }

  function stepIncrease() {
    if (step < 5) {
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
        {step == 1 && <PersonalInfo stepIncrease={stepIncrease} />}
        {step == 2 && (
          <SelectPlan
            updateCard={updateCard}
            stepIncrease={stepIncrease}
            stepDecrease={stepDecrease}
          />
        )}
        {step == 3 && (
          <AddOnes
            planDetails={card}
            updateAddOnes={updateAddOnes}
            stepIncrease={stepIncrease}
            stepDecrease={stepDecrease}
          />
        )}
        {step == 4 && (
          <FinishingUp
            card={card}
            addOnes={addOnes}
            stepIncrease={stepIncrease}
            stepDecrease={stepDecrease}
          />
        )}
        {step == 5 && <FinalPage />}
      </section>
    </main>
  );
}
