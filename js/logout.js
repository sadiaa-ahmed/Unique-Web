import { getAuth, signOut } from "./firebase.js";  // Import necessary Firebase functions

const auth = getAuth();
const logoutBtn = document.getElementById('logout-btn');

// Handle the logout functionality
logoutBtn.addEventListener('click', () => {
  signOut(auth).then(() => {
    alert('You have successfully logged out.');
    window.location.href = "login.html"; // Redirect to login after logout
  }).catch((error) => {
    alert('Error logging out: ' + error.message);
  });
});