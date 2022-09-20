import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV6vdhxsuxfBQfz5DVHCacONeg8ijDq4o",
  authDomain: "book-whishlist-746bc.firebaseapp.com",
  projectId: "book-whishlist-746bc",
  storageBucket: "book-whishlist-746bc.appspot.com",
  messagingSenderId: "422076667731",
  appId: "1:422076667731:web:63a5423a483c73062333a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// auth providers
export const provider = new GoogleAuthProvider();


