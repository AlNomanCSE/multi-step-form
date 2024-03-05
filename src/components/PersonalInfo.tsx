import { title } from "process";
import styles from "./PersonalInfo.module.css";

type contextProp = {
  title: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
};
function Context({ title, type, name, id, placeholder }: contextProp) {
  return (
    <div className={styles.input}>
      <label htmlFor="name">{title}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
}
const PersonalInfo = () => {
  const types = [
    {
      title: "Name",
      type: "text",
      name: "name",
      id: "name",
      placeholder: "e.g. Stephen King",
    },
    {
      title: "Email",
      type: "email",
      name: "email",
      id: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },

    {
      title: "Phone Number",
      type: "text",
      name: "phone",
      id: "phone",
      placeholder: "e.g. +1 234 567 890",
    },
  ];
  return (
    <section className={styles.main}>
      <div className={styles.headings}>
        <h1>Personal info</h1>
        <p>Please provide your phone, email address, and phone number.</p>
      </div>
      <div className={styles.allInputs}>
        {types.map((object, index) => (
          <Context
            title={object.title}
            type={object.type}
            name={object.name}
            id={object.id}
            placeholder={object.placeholder}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default PersonalInfo;
