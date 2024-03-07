import React from "react";
import styles from "./FinishingUp.module.css";

type CardType = {
  title: string;
  pricing: number;
  time: string;
};
type IProps = {
  card: CardType;
  addOnes: CardType[];
  stepIncrease: () => void;
  stepDecrease: () => void;
};
const FinishingUp = ({ card, addOnes, stepIncrease, stepDecrease }: IProps) => {
  return (
    <section className={styles.main}>
      <div className={styles.headings}>
        <h1> Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.section1}>
          <div>
            <div>
              <h1>
                {card.title}({card.time == "yr" ? "Yearly" : "Monthly"})
              </h1>
            </div>
            <div>
              ${card.pricing}/{card.time == "yr" ? "yr" : "mo"}
            </div>
          </div>
          <hr />
          <div>
            {addOnes.map((addone, index) => (
              <AddOnesSection
                title={addone.title}
                pricing={addone.pricing}
                time={addone.time}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className={styles.section2}>
          <p>Total(per year)</p>
          <span>
            +
            {card.pricing +
              addOnes.reduce(
                (accumulator, current) => accumulator + current["pricing"],
                0
              )}
            /{card.time == "yr" ? "yr" : "mo"}
          </span>
        </div>
      </div>
      <section className={styles.buttons}>
        <button onClick={stepDecrease}>Go Back</button>
        <button onClick={stepIncrease}>Confirm</button>
      </section>
    </section>
  );
};
function AddOnesSection({ title, pricing, time }: CardType) {
  return (
    <div>
      <p>{title}</p>
      <span>
        +{pricing}/{time}
      </span>
    </div>
  );
}
export default FinishingUp;
