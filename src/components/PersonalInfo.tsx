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
  setTouched: Dispatch<SetStateAction<boolean>>;
  touched: boolean;
};
function Context({
  title,
  type,
  name,
  id,
  placeholder,
  fromData,
  setFromData,
  setTouched,
  touched,
}: contextProp) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFromData((previousData) => ({ ...previousData, [name]: value }));
  }
  const errorMessages: { name: string; email: string; phone: string } = {
    name: "Enter your Name",
    email: "Enter your Email",
    phone: "Enter your Phone Number",
  };
  function handleFocuse() {
    setTouched(true);
    if (fromData[name as keyof typeof fromData].trim() !== "") {
      setTouched(false);
    }
  }

  return (
    <div className={styles.input}>
      <label>
        {title}
        <p
          className={
            touched && fromData[name as keyof typeof fromData].trim() === ""
              ? styles.inputError
              : ""
          }
        >
          {touched &&
            fromData[name as keyof typeof fromData].trim() == "" &&
            errorMessages[name as keyof typeof errorMessages]}
        </p>
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={handleFocuse}
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
  const [touched, setTouched] = useState<boolean>(false);
  function handelIncrease() {
    fromData["name"].trim() != "" &&
      fromData["email"].trim() != "" &&
      fromData["phone"].trim() != "" &&
      stepIncrease();
  }

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
          setTouched={setTouched}
          touched={touched}
        />
        <Context
          title="Email"
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          setFromData={setFromData}
          fromData={fromData}
          setTouched={setTouched}
          touched={touched}
        />
        <Context
          title="Phone Number"
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          setFromData={setFromData}
          fromData={fromData}
          setTouched={setTouched}
          touched={touched}
        />
      </div>
      <section className={styles.buttons}>
        <button onClick={handelIncrease}>Next Step</button>
      </section>
    </section>
  );
};

export default PersonalInfo;
