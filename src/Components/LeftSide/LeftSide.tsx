import styles from "./leftSide.module.css";

function LeftSide() {
  return (
    <div>
      {
        <img
          src="/src/assets/images/clarityLogo.svg"
          className={styles.clarityLogo}
          alt="Clarity Logo"
        />
      }
    </div>
  );
}
export default LeftSide;
