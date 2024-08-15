// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkLFJnRrLQ-BXsJXUmsn9m-nZ04H6Ksr4",
  authDomain: "flashcard-saas-b9ba5.firebaseapp.com",
  projectId: "flashcard-saas-b9ba5",
  storageBucket: "flashcard-saas-b9ba5.appspot.com",
  messagingSenderId: "930705964757",
  appId: "1:930705964757:web:986b03c225ea04ac2e2c5c",
  measurementId: "G-C08XEJC000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);