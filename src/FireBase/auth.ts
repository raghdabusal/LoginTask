import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; //  create  new user with email & password 
import { doc, setDoc, serverTimestamp , getDoc} from "firebase/firestore"; //  to  create and save inforamtion // GetDoc -> to check if the user already exists in Firestore
import { auth, db } from "./FireBase"; //

//function to take two input
export const signUp = async (email: string, password: string) => {
  //to create new user account with email & Pass
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await setDoc(
    doc(db, "users", user.uid),
    //store info about the new user into database.
    {
      uid: user.uid,
      email: user.email,
      createdAt: serverTimestamp(),
    }
  );

  return user;
};


export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider(); // set up google provide

  try {
    const result = await signInWithPopup(auth, provider); // open google popup
    const user = result.user; // get the signed-in iser info

    const userRef = doc(db, "users", user.uid); // Firestore info
    const userSnapshot = await getDoc(userRef); // check if the user exists


    // if user dosent already exist in firestore, add them 
    if (!userSnapshot.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
      });
    }

    return user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};
