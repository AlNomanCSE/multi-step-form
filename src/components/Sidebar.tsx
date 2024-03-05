import Image from "next/image";
import styles from "./Sidebar.module.css";
type ProgressType = {
  step: number;
  title: string;
  activeStep: number;
};

function ProgressStep({ step, title, activeStep }: ProgressType) {
  return (
    <div className={styles.content}>
      <div
        className={
          activeStep === step ? `${styles.active}` : `${styles.circle}`
        }
      >
        {step}
      </div>
      <div className={styles.text}>
        <span>Step {step}</span> <br />
        {title}
      </div>
    </div>
  );
}
type Props = {
  activeStep: number;
};
const Sidebar = ({ activeStep }: Props) => {
  const ProgressArry: { step: number; title: string }[] = [
    { step: 1, title: "Your info" },
    { step: 2, title: " Select plan" },
    { step: 3, title: "Add-ons" },
    { step: 4, title: "Summary" },
  ];
  return (
    <section className={styles.main}>
      <Image
        src="images/bg-sidebar-desktop.svg"
        alt="sidebar image"
        width={500}
        height={500}
        className={styles.image}
      />
      <section className={styles.div}>
        {ProgressArry.map((object, index) => (
          <ProgressStep
            step={object.step}
            title={object.title}
            key={index}
            activeStep={activeStep}
          />
        ))}
      </section>
    </section>
  );
};

export default Sidebar;
