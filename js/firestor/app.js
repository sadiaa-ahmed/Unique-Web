import { db } from './firebase.js'; // Adjust the path as necessary
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"; // Import Firestore functions

// Form submit event
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        // Save data to Firestore
        await addDoc(collection(db, 'messages'), {
            name: name,
            email: email,
            message: message,
            timestamp: serverTimestamp()
        });
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    } catch (error) {
        alert('Error sending message: ' + error);
    }
});