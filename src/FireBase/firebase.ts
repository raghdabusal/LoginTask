import { initializeApp } from "firebase/app"; // start Firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // to manage users logging in and signing up
import { getFirestore } from "firebase/firestore"; /// to store and get data (database)

//config for the firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig); // starts the Firebase inside the app
const auth = getAuth(app); // instance of Firebase Authentication (for sign up, login, sign out, checking if user is logged in)

const db = getFirestore(app);
// instance of Firebase Firestore (for storing and retrieving data)
const provider = new GoogleAuthProvider();

export { auth, db, provider };
