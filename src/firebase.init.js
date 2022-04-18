// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7tXvF75B5V7H7Vs_28Lh_7HO2O-W3Vc",
  authDomain: "wedding-photographer-8d8a6.firebaseapp.com",
  projectId: "wedding-photographer-8d8a6",
  storageBucket: "wedding-photographer-8d8a6.appspot.com",
  messagingSenderId: "852561101410",
  appId: "1:852561101410:web:fcc9a3de7200c67727873b",
  measurementId: "G-CW1RD0P80M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;