// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1P4_lkcDQ715XiZe8VVnI7--ahi2yog",
  authDomain: "clone-3521f.firebaseapp.com",
  projectId: "clone-3521f",
  storageBucket: "clone-3521f.appspot.com",
  messagingSenderId: "895155975542",
  appId: "1:895155975542:web:676b0a7999e53d6d2cf657",
  measurementId: "G-VEH272REJS",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
