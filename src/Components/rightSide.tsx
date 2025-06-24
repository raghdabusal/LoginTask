import styles from "./rightSide.module.css";
import LoginForm from "./loginForm";

function RightSide() {
  return (
    <div className="right-side">
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Welcome Back!</h2>
        <p className={styles.descrption}>
          Please enter your details to sign in.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}

export default RightSide;
