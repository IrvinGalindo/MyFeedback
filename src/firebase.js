import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXvFwQ89Oh8E8dAS8j_HMdFO9fwsfd4KI",
  authDomain: "my-feedba.firebaseapp.com",
  projectId: "my-feedba",
  storageBucket: "my-feedba.appspot.com",
  messagingSenderId: "963956642785",
  appId: "1:963956642785:web:fdaed9c299c88a7a6238a0",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
