import React from "react";
import styles from "./FinalPage.module.css";
type Props = {};

const FinalPage = (props: Props) => {
  return (
    <section className={styles.main}>
      <div className={styles.headings}>
        <h1> Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default FinalPage;
