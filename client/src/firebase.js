// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-54565.firebaseapp.com",
  projectId: "mern-estate-54565",
  storageBucket: "mern-estate-54565.appspot.com",
  messagingSenderId: "371726847636",
  appId: "1:371726847636:web:9e7f837983e0f2a0cbee81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);