// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwbSQzM_vZoj0_mNTaxbKMxXr_bL0ZXYM",
  authDomain: "netflixgpt-7f433.firebaseapp.com",
  projectId: "netflixgpt-7f433",
  storageBucket: "netflixgpt-7f433.firebasestorage.app",
  messagingSenderId: "994255118500",
  appId: "1:994255118500:web:e3315021469b2362e4c631",
  measurementId: "G-V5HZTYV3BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()