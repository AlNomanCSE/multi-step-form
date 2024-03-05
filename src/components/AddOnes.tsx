import React from "react";
import styles from "./AddOnes.module.css";

type cardtype = {
  title: string;
  discription: string;
  pricing: number;
};
function Card({ title, discription, pricing }: cardtype) {
  return (
    <div className={styles.addOneCard}>
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <h1> {title}</h1>
        <p> {discription}</p>
      </div>
      <div>
        <h5> +${pricing}/mo</h5>
      </div>
    </div>
  );
}
const AddOnes = () => {
  const CardFile = [
    {
      title: "Online service",
      discription: " Access to multiplayer games",
      pricing: 1,
    },
    {
      title: "Larger storage",
      discription: " Extra 1TB of cloud save",
      pricing: 2,
    },
    {
      title: "Customizable Profile",
      discription: "Custom theme on your profile",
      pricing: 2,
    },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.headings}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className={styles.addOneCards}>
        {CardFile.map((object, index) => (
          <Card
            title={object.title}
            discription={object.discription}
            pricing={object.pricing}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AddOnes;
