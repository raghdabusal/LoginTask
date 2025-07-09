// src/services/authService.ts

import { auth, db } from "../FireBase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import type { User } from "firebase/auth";

interface SignUpResponse {
  success: boolean;
  message?: string;
  user?: User;
}

export const signUp = async (
  email: string,
  password: string
): Promise<SignUpResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Save user in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      createdAt: serverTimestamp(),
    });

    return { success: true, user };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return { success: false, message: errorMessage };
  }
};
