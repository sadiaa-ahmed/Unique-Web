import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyjKDfPKkk5CTAS-1jfTFZqmZemcV51pA",
  authDomain: "quranic-web-b4177.firebaseapp.com",
  projectId: "quranic-web-b4177",
  storageBucket: "quranic-web-b4177.appspot.com",
  messagingSenderId: "758297255121",
  appId: "1:758297255121:web:1b61eee54886e82ad5f9f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };


// // Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// import { 
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword ,
//   signOut ,
//   onAuthStateChanged,
//   } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
//   // import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"; // Import Firestore

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAyjKDfPKkk5CTAS-1jfTFZqmZemcV51pA",
//   authDomain: "quranic-web-b4177.firebaseapp.com",
//   projectId: "quranic-web-b4177",
//   storageBucket: "quranic-web-b4177.appspot.com",
//   messagingSenderId: "758297255121",
//   appId: "1:758297255121:web:1b61eee54886e82ad5f9f0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Initialize Firebase Authentication

// export{getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut ,  onAuthStateChanged,};