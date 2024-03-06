import React from "react";
import styles from "./FinishingUp.module.css";

const FinishingUp = () => {
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
              <h1>Arcade(Yearly)</h1>
              <span>change</span>
            </div>
            <div>$90/yr</div>
          </div>
          <hr />
          <div>
            <div>
              <p>Online service</p>
              <span>+10/yr</span>
            </div>
            <div>
              <p>Larger storage</p>
              <span>+20/yr</span>
            </div>
          </div>
        </div>

        <div className={styles.section2}>
          <p>Total(per year)</p>
          <span>+120/yr</span>
        </div>
      </div>
    </section>
  );
};

export default FinishingUp;
