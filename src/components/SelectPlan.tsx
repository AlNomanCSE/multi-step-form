import React, { useEffect, useState } from "react";
import styles from "./SelectPlan.module.css";
import Image from "next/image";

type CardType = {
  src: string;
  title: string;
  pricing: number;
  time: string;
};
function Card({ src, title, pricing, time }: CardType) {
  return (
    <div className={styles.card}>
      <div>
        <Image src={src} alt="logo" width={40} height={40} />
      </div>
      <div className={styles.text}>
        <h1>{title}</h1>
        <br />
        <span>
          ${pricing}/{time}
        </span>
      </div>
    </div>
  );
}
const cardDetailsMonthly = [
  {
    src: "/images/icon-arcade.svg",
    title: "Arcade",
    pricing: 9,
    time: "mo",
  },
  {
    src: "/images/icon-advanced.svg",
    title: "Advanced",
    pricing: 12,
    time: "mo",
  },
  {
    src: "/images/icon-pro.svg",
    title: "Pro",
    pricing: 15,
    time: "mo",
  },
];
const cardDetailsYearly = [
  {
    src: "/images/icon-arcade.svg",
    title: "Arcade",
    pricing: 90,
    time: "yr",
  },
  {
    src: "/images/icon-advanced.svg",
    title: "Advanced",
    pricing: 120,
    time: "yr",
  },
  {
    src: "/images/icon-pro.svg",
    title: "Pro",
    pricing: 150,
    time: "yr",
  },
];

const SelectPlan = () => {
  const [cardDetails, setCardDetails] =
    useState<CardType[]>(cardDetailsMonthly);

  function handleMonthOrYear(event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCardDetails(cardDetailsYearly);
    } else {
      setCardDetails(cardDetailsMonthly);
    }
  }

  return (
    <section className={styles.main}>
      <div className={styles.headings}>
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div>
        <div className={styles.cards}>
          {cardDetails.map((object, index) => (
            <Card
              src={object.src}
              title={object.title}
              pricing={object.pricing}
              key={index}
              time={object.time}
            />
          ))}
        </div>
        <div className={styles.billingTime}>
          <span
            className={
              cardDetails == cardDetailsMonthly ? `${styles.active}` : ``
            }
          >
            Monthly
          </span>
          <label className={styles.switch}>
            <input type="checkbox" onChange={handleMonthOrYear} />
            <span className={styles.slider}></span>
          </label>
          <span
            className={
              cardDetails == cardDetailsYearly ? `${styles.active}` : ``
            }
          >
            Yearly
          </span>
        </div>
      </div>
    </section>
  );
};

export default SelectPlan;
