// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2HMjGY8oL_OGkYWj8Ubff8IZdq3-nQks",
  authDomain: "netflixgpt-cf026.firebaseapp.com",
  projectId: "netflixgpt-cf026",
  storageBucket: "netflixgpt-cf026.firebasestorage.app",
  messagingSenderId: "330235455686",
  appId: "1:330235455686:web:962c74ebe4fdd0b433cfc7",
  measurementId: "G-HMLZC6Y0HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);