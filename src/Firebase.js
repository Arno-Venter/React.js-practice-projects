import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuq4-Wtz-AGiEmoqpIaaT88VFLOOYVBgk",
  authDomain: "react-twitter-6fe89.firebaseapp.com",
  projectId: "react-twitter-6fe89",
  storageBucket: "react-twitter-6fe89.appspot.com",
  messagingSenderId: "372019045654",
  appId: "1:372019045654:web:7c3108368653b37b709c37",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setUser) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => console.log(error));
};

export const signOutWithGoogle = (setUser) => {
  signOut(auth)
    .then(() => {
      alert("sign-out successful");
      setUser(null);
    })
    .catch((error) => {
      console.log(error);
    });
};
