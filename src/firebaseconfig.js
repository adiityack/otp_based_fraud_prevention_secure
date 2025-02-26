
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNMRduzdtpIDAXp80-6WWO9wg4yV9pNKA",
  authDomain: "otpdatabase-6fe75.firebaseapp.com",
  projectId: "otpdatabase-6fe75",
  storageBucket: "otpdatabase-6fe75.appspot.com",
  messagingSenderId: "4030951024",
  appId: "1:4030951024:web:8c7edb5712df71250b0eb5",
  measurementId: "G-8E5LC3K2SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
