import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../FireBase/auth";
import SocialLogin from "../SocialLogin/ SocialLogin";
import styles from "./Signup.module.css";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setSuccess("Signup successful!");
      navigate("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.SuContainer}>
        <label className={styles.SuLabel}>E-Mail Address</label>
        <div className={styles.SuInputWrapper}>
          <img
            src="/src/assets/images/user.svg"
            className={styles.SuEmailIcon}
          />
          <input
            className={styles.SuInput}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
      </div>

      <label className={styles.SuPwLabel}>Password</label>
      <div className={styles.SuPwInputWrapper}>
        <input
          type={showPassword ? "text" : "password"} // ✅ Dynamically change input type
          className={styles.SuPwInput}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <img
          src={
            showPassword
              ? "/src/assets/images/slashEye.svg"
              : "/src/assets/images/eye.svg"
          }
          onClick={togglePassword}
          className={styles.SuEyeIcon}
        />
      </div>

      {/* Remember Me Toggle */}
      <div className={styles.SuOptionsRow}>
        <label className={styles.SuToggleWrapper}>
          <input type="checkbox" className={styles.SuToggleCheckbox} />
          <span className={styles.SuToggleSlider}></span>
          <span className={styles.SuToggleLabel}>Remember Me</span>
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className={styles.SuLoginButton}>
        Sign Up
      </button>

      {/* Error/Success Messages */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      {/* Divider + Social Login */}
      <div className={styles.SuDividerWithText}>
        <hr className={styles.SuLine} />
        <span className={styles.SuDividerText}>or</span>
        <hr className={styles.SuLine} />
      </div>

      <SocialLogin />
    </form>
  );
}

export default Signup;
