import React, { useState } from "react";
import styles from "./AddOnes.module.css";

type Cardtype = {
  title: string;
  discription: string;
  pricing: number;
  time: string;
};
function Card({
  title,
  discription,
  pricing,
  time,
  handleCheckboxChange,
}: Cardtype & {
  handleCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    title: string,
    pricing: number,
    time: string
  ) => void;
}) {
  return (
    <div className={styles.addOneCard}>
      <div>
        <input
          type="checkbox"
          onChange={(e) => handleCheckboxChange(e, title, pricing, time)}
        />
      </div>
      <div>
        <h1> {title}</h1>
        <p> {discription}</p>
      </div>
      <div>
        <h5>
          {" "}
          +${pricing}/{time}
        </h5>
      </div>
    </div>
  );
}
const CardFileMonthyly = [
  {
    title: "Online service",
    discription: " Access to multiplayer games",
    pricing: 1,
    time: "mo",
  },
  {
    title: "Larger storage",
    discription: " Extra 1TB of cloud save",
    pricing: 2,
    time: "mo",
  },
  {
    title: "Customizable Profile",
    discription: "Custom theme on your profile",
    pricing: 2,
    time: "mo",
  },
];
const CardFileYearly = [
  {
    title: "Online service",
    discription: " Access to multiplayer games",
    pricing: 10,
    time: "yr",
  },
  {
    title: "Larger storage",
    discription: " Extra 1TB of cloud save",
    pricing: 20,
    time: "yr",
  },
  {
    title: "Customizable Profile",
    discription: "Custom theme on your profile",
    pricing: 20,
    time: "yr",
  },
];
type CardType = {
  title: string;
  pricing: number;
  time: string;
};
type AddOnesProps = {
  planDetails: CardType;
  updateAddOnes: (newAddons: CardType[]) => void;
  stepIncrease: () => void;
  stepDecrease: () => void;
};

const AddOnes = ({
  planDetails,
  updateAddOnes,
  stepIncrease,
  stepDecrease,
}: AddOnesProps) => {
  const [totalPricing, setTotalPeicing] = useState<number>(0);
  const [addOnes, setAddons] = useState<CardType[]>([]);
  function handleCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
    title: string,
    pricing: number,
    time: string
  ) {
    const isChecked = event.target.checked;
    if (isChecked) {
      setTotalPeicing((pre) => pre + pricing);
      setAddons([...addOnes, ...[{ title, pricing, time }]]);
    } else {
      setTotalPeicing((pre) => pre - pricing);
      setAddons(() => addOnes.filter((addone) => addone.title !== title));
    }
  }

  return (
    <section className={styles.main}>
      <div className={styles.headings}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className={styles.addOneCards}>
        {planDetails.time === "mo"
          ? CardFileMonthyly.map((object, index) => (
              <Card
                title={object.title}
                discription={object.discription}
                pricing={object.pricing}
                time={object.time}
                handleCheckboxChange={handleCheckboxChange}
                key={index}
              />
            ))
          : CardFileYearly.map((object, index) => (
              <Card
                title={object.title}
                discription={object.discription}
                pricing={object.pricing}
                time={object.time}
                handleCheckboxChange={handleCheckboxChange}
                key={index}
              />
            ))}
      </div>
      <section className={styles.buttons}>
        <button onClick={stepDecrease}>Go Back</button>
        <button
          onClick={() => {
            stepIncrease();
            updateAddOnes(addOnes);
          }}
        >
          Next Step
        </button>
      </section>
    </section>
  );
};

export default AddOnes;
