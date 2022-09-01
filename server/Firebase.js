// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSZ075iZRgICCqpWygG4d_gzMGAIranuw",
    authDomain: "deutsche-admission-portal.firebaseapp.com",
    projectId: "deutsche-admission-portal",
    storageBucket: "deutsche-admission-portal.appspot.com",
    messagingSenderId: "594603419973",
    appId: "1:594603419973:web:0856fc0719e8687bbfb62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);