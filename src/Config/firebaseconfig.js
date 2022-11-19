// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhnoUZW9pNQ6sHrEWeE6hLASyLPpMj2YA",
    authDomain: "react-hakathon.firebaseapp.com",
    projectId: "react-hakathon",
    storageBucket: "react-hakathon.appspot.com",
    messagingSenderId: "679432529389",
    appId: "1:679432529389:web:d6f87156c4a1cb771573e4",
    measurementId: "G-F2YC7F3EJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;