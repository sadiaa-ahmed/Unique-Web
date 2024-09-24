import { getAuth, signOut } from "./firebase.js"; // Ensure the correct path

const auth = getAuth();
const logoutBtn = document.getElementById('logout-btn');

// Check if logout button exists
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            console.log('User successfully logged out.');
            alert('You have successfully logged out.');
            window.location.href = 'login.html'; // Redirect to login after logout
        }).catch((error) => {
            console.error('Error logging out:', error.message);
            alert('Error logging out: ' + error.message);
        });
    });
} else {
    console.error('Logout button not found!');
}