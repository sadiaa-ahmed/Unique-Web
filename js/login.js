import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

// Login Form Handling
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully logged in
      const user = userCredential.user;
      alert('Login successful!');
      window.location.href = "index.html"; // Redirect to homepage after login
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage); // Show error message if login fails
    });
});``