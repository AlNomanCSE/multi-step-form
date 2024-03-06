import React, { useEffect, useState } from "react";
import styles from "./SelectPlan.module.css";
import Image from "next/image";

type CardType = {
  src: string;
  title: string;
  pricing: number;
  time: string;
  updateCard: ({
    title,
    pricing,
    time,
  }: {
    title: string;
    pricing: number;
    time: string;
  }) => void;
};
function Card({ src, title, pricing, time, updateCard }: CardType) {
  const handleClick = () => {
    updateCard({ title, pricing, time });
  };
  return (
    <div className={styles.card} onClick={handleClick}>
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
type Props = {
  updateCard: ({
    title,
    pricing,
    time,
  }: {
    title: string;
    pricing: number;
    time: string;
  }) => void;
  stepIncrease: () => void;
  stepDecrease: () => void;
};

const SelectPlan = ({ updateCard, stepIncrease, stepDecrease }: Props) => {
  const [LocalCardDetails, setLocalCardDetails] = useState<
    {
      src: string;
      title: string;
      pricing: number;
      time: string;
    }[]
  >(cardDetailsMonthly);

  function handleMonthOrYear(event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setLocalCardDetails(cardDetailsYearly);
    } else {
      setLocalCardDetails(cardDetailsMonthly);
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
          {LocalCardDetails.map((object, index) => (
            <Card
              src={object.src}
              title={object.title}
              pricing={object.pricing}
              key={index}
              time={object.time}
              updateCard={updateCard}
            />
          ))}
        </div>
        <div className={styles.billingTime}>
          <span className={cardDetailsMonthly ? `${styles.active}` : ``}>
            Monthly
          </span>
          <label className={styles.switch}>
            <input type="checkbox" onChange={handleMonthOrYear} />
            <span className={styles.slider}></span>
          </label>
          <span className={cardDetailsYearly ? `${styles.active}` : ``}>
            Yearly
          </span>
        </div>
      </div>
      <section className={styles.buttons}>
        <button onClick={stepDecrease}>Go Back</button>
        <button onClick={stepIncrease}>Next Step</button>
      </section>
    </section>
  );
};

export default SelectPlan;
