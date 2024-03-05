import React from "react";
import styles from "./SelectPlan.module.css";
import Image from "next/image";

type Props = {};
type CardType = {
  src: string;
  title: string;
  pricing: string;
};
function Card({ src, title, pricing }: CardType) {
  return (
    <div className={styles.card}>
      <div>
        <Image src={src} alt="logo" width={40} height={40} />
      </div>
      <div className={styles.text}>
        <h1>{title}</h1>
        <br />
        <span>{pricing}</span>
      </div>
    </div>
  );
}
const SelectPlan = (props: Props) => {
  const cardDetails = [
    {
      src: "/images/icon-arcade.svg",
      title: "Arcade",
      pricing: "$9/mo",
    },
    {
      src: "/images/icon-advanced.svg",
      title: "Advanced",
      pricing: "$12/mo",
    },
    {
      src: "/images/icon-pro.svg",
      title: "Pro",
      pricing: "$15/mo",
    },
  ];
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
            />
          ))}
        </div>
        <div className={styles.billingTime}>
          <span>Monthly</span>

          <span>Yearly</span>
        </div>
      </div>
    </section>
  );
};

export default SelectPlan;
