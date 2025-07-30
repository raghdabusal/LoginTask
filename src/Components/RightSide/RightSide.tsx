import styles from "./rightSide.module.css";
import AuthTabs from "../Tabs/AuthTabs";

function RightSide() {
  return (
    <div className="right-side">
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Welcome Back!</h2>
        <p className={styles.descrption}>
          Please enter your details to sign in.
        </p>
        <AuthTabs />
      </div>
    </div>
  );
}

export default RightSide;
