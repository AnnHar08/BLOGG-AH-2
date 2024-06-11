// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6_5Wu0a30lnZ5iev2gA1KQwVNz5bafFI",
  authDomain: "blogg-ah.firebaseapp.com",
  projectId: "blogg-ah",
  storageBucket: "blogg-ah.appspot.com",
  messagingSenderId: "894333619414",
  appId: "1:894333619414:web:16e087dcb3eec50fbc4d77",
  measurementId: "G-VQZR6WGLRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
