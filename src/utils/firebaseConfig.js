// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7YKba2DEtPxrf-eRxe1bSh1dqmufeJQ",
  authDomain: "compustar-coder3.firebaseapp.com",
  projectId: "compustar-coder3",
  storageBucket: "compustar-coder3.appspot.com",
  messagingSenderId: "591956272167",
  appId: "1:591956272167:web:802469f80abf4f33c1da02",
  measurementId: "G-PJLJ612ZV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;