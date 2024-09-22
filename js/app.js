
// import {auth, onAuthStateChanged} from "./firebase.js";

// const userEmailDiv = document.querySelector("#user-email");

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in
//     //   window.location = "./pages/dashboard.html";

//     //   console.log("🚀 ~ dashboard ~ user:", user);
  
//       userEmailDiv.innerText = user.email;
//     } else {
//         // user is logout
//       window.location = "./pages/login.html";
//       console.log("User is signed out");
//     }
//   });
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyjKDfPKkk5CTAS-1jfTFZqmZemcV51pA",
    authDomain: "quranic-web-b4177.firebaseapp.com",
    projectId: "quranic-web-b4177",
    storageBucket: "quranic-web-b4177.appspot.com",
    messagingSenderId: "758297255121",
    appId: "1:758297255121:web:1b61eee54886e82ad5f9f0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    console.log('User state changed:', user);
    if (user) {
        // User is signed in, you can redirect or load user-specific content
    } else {
        // No user is signed in, redirect to login
        window.location.href = "login.html"; // Adjust as needed
    }
});