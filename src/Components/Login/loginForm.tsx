import React, { useState } from "react";
import SocialLogin from "../SocialLogin/ SocialLogin";
import styles from "./loginForm.module.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/FireBase";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // this create a navigate function that you can use it to go to a different Route

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop form from reloading the page
    setError("");

    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Incorrect email or password. Please try again.");
        console.error("Login error:", err.message);
      }
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.unContainer}>
        <label className={styles.unLabel}>E-Mail Address</label>
        <br />

        <div className={styles.unInputWrapper}>
          <img src="/src/assets/images/user.svg" className={styles.emailIcon} />
          <input
            className={styles.unInput}
            type="text"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      <label className={styles.pwLabel}>Password</label>
      <br />
      <div className={styles.pwInputWrapper}>
        <input
          className={styles.pwInput}
          type={showPassword ? "text" : "password"}
          autoComplete="off"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <img
          src={
            showPassword
              ? "/src/assets/images/slashEye.svg"
              : "/src/assets/images/eye.svg"
          }
          onClick={togglePassword}
          className={styles.eyeIcon}
          alt={showPassword ? "Hide password" : "Show password"}
        />
      </div>

      <div className={styles.optionsRow}>
        <label className={styles.toggleWrapper}>
          <input type="checkbox" className={styles.toggleCheckbox} />
          <span className={styles.toggleSlider}></span>
          <span className={styles.toggleLabel}>Remember Me</span>
        </label>

        <div className={styles.forgotText}>Forgot password?</div>
      </div>

      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}

      <button type="submit" className={styles.loginButton}>
        Login
      </button>

      <div className={styles.dividerWithText}>
        <hr className={styles.line} />
        <span className={styles.dividerText}>or</span>
        <hr className={styles.line} />
      </div>
      <SocialLogin />
    </form>
  );
}

export default LoginForm;
