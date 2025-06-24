import styles from "./ SocialLogin.module.css";

function SocialLogin() {
  return (
    <div className={styles.socialLoginContainer}>
      <a
        href="https://www.facebook.com/login"
        target="_blank"
        className={styles.facebook}
      >
        <img
          src="/src/assets/images/facebook.svg"
          className={styles.icon}
          alt="Facebook"
        />
        Continue with Facebook
      </a>

      <a
        href="https://accounts.google.com/signin"
        target="_blank"
        className={styles.google}
      >
        <img
          src="/src/assets/images/google.svg"
          className={styles.icon}
          alt="Google"
        />
        Continue with Google
      </a>

      <a
        href="https://appleid.apple.com/auth/signin"
        target="_blank"
        className={styles.apple}
      >
        <img
          src="/src/assets/images/apple.svg"
          className={styles.icon}
          alt="Apple"
        />
        Continue with Apple
      </a>
    </div>
  );
}

export default SocialLogin;
