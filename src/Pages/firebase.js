
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCTxzOWsfYy9ChKMFyUzgzUeuSbWgSiuFs",
  authDomain: "admission-portal-21ea9.firebaseapp.com",
  databaseURL: "https://admission-portal-21ea9-default-rtdb.firebaseio.com",
  projectId: "admission-portal-21ea9",
  storageBucket: "admission-portal-21ea9.appspot.com",
  messagingSenderId: "444647914260",
  appId: "1:444647914260:web:e64e312c33f8dc800d2001",
  measurementId: "G-8WW4F0R7HZ"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();