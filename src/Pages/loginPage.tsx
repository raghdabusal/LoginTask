import styles from "./loginPage.module.css";
import LeftSide from "../Components/leftSide";
import RightSide from "../Components/rightSide";

function LoginPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundLayer}></div>

      <div className={styles.leftSide}>
        <LeftSide />
      </div>
      <div className={styles.rightSide}>
        <RightSide />
      </div>
    </div>
  );
}

export default LoginPage;
