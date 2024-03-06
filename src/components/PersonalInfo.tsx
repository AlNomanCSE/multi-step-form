import { Dispatch, SetStateAction, useState } from "react";
import styles from "./PersonalInfo.module.css";

type contextProp = {
  title: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  fromData: { name: string; email: string; phone: string };
  setFromData: Dispatch<
    SetStateAction<{ name: string; email: string; phone: string }>
  >;
};
function Context({
  title,
  type,
  name,
  id,
  placeholder,
  fromData,
  setFromData,
}: contextProp) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFromData((previousData) => ({ ...previousData, [name]: value }));
  }
  return (
    <div className={styles.input}>
      <label htmlFor="name">{title}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleInputChange}
        value={
          name === "name"
            ? fromData["name"]
            : name === "email"
            ? fromData["email"]
            : fromData["phone"]
        }
      />
    </div>
  );
}

type IProps = {
  stepIncrease: () => void;
  fromData: { name: string; email: string; phone: string };
  setFromData: Dispatch<
    SetStateAction<{ name: string; email: string; phone: string }>
  >;
};
const PersonalInfo = ({ stepIncrease, fromData, setFromData }: IProps) => {
  return (
    <section className={styles.main}>
      <div className={styles.headings}>
        <h1>Personal info</h1>
        <p>Please provide your phone, email address, and phone number.</p>
      </div>
      <div className={styles.allInputs}>
        <Context
          title="Name"
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          setFromData={setFromData}
          fromData={fromData}
        />
        <Context
          title="Email"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          setFromData={setFromData}
          fromData={fromData}
        />
        <Context
          title="Phone Number"
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          setFromData={setFromData}
          fromData={fromData}
        />
      </div>
      <section className={styles.buttons}>
        <button onClick={stepIncrease}>Next Step</button>
      </section>
    </section>
  );
};

export default PersonalInfo;
