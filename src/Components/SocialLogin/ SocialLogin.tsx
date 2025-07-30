import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../FireBase/FireBase";
import { useNavigate } from "react-router-dom";
import styles from "./ SocialLogin.module.css";

const SocialLogin: React.FC = () => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    console.log("inside signin with google");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in user:", result.user.email);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Google Sign-In error:", error.message);
      });
  };
  return (
    <button type="button" className={styles.google} onClick={signInWithGoogle}>
      <img
        src="/src/assets/images/google.svg"
        alt="Google"
        style={{ width: "24px", height: "24px" }}
      />
      Sign in with Google
    </button>
  );
};

export default SocialLogin;

// {
//   /* <a
//         href="https://www.facebook.com/login"
//         target="_blank"
//         className={styles.facebook}
//       >
//         <img
//           src="/src/assets/images/facebook.svg"
//           className={styles.icon}
//           alt="Facebook"
//         />
//         Continue with Facebook
//       </a>

//       <a
//         href="https://accounts.google.com/signin"
//         target="_blank"
//         className={styles.google}
//       >
//         <img
//           src="/src/assets/images/google.svg"
//           className={styles.icon}
//           alt="Google"
//         />
//         Continue with Google
//       </a>

//       <a
//         href="https://appleid.apple.com/auth/signin"
//         target="_blank"
//         className={styles.apple}
//       >
//         <img
//           src="/src/assets/images/apple.svg"
//           className={styles.icon}
//           alt="Apple"
//         />
//         Continue with Apple
// //       </a> */
// }
// //     </div>
// //   );
// // }

// // src/components/SocialLogin.tsx
