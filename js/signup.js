import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

// Signup Form Handling
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      alert('Signup successful!');
      window.location.href = "main.html"; // Redirect after signup
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
