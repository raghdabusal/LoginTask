import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpRaEqW2Fh16rozdRrzgV80N95qXLl6Cg",
  authDomain: "loginhub-ae2e7.firebaseapp.com",
  projectId: "loginhub-ae2e7",
  storageBucket: "loginhub-ae2e7.firebasestorage.app",
  messagingSenderId: "26028943133",
  appId: "1:26028943133:web:4e0b52c68c865af79d63f4",
  measurementId: "G-Q64PT7NL64", // Optional
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
