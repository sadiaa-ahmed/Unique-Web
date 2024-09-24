import { getAuth, onAuthStateChanged } from "./firebase.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in:', user);
    } else {
        console.log('No user is signed in.');
        window.location.href = 'login.html'; // Redirect to login page if no user
    }
});