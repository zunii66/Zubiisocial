// signup.js
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Validation
    if (!name || !username || !email || !password) {
        messageDiv.textContent = 'Please fill all fields!';
        messageDiv.style.color = 'red';
        return;
    }

    if (password.length < 6) {
        messageDiv.textContent = 'Password must be at least 6 characters!';
        messageDiv.style.color = 'red';
        return;
    }

    try {
        // 1. Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. Save extra data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            username: username,
            email: email,
            createdAt: new Date().toISOString()
        });

        messageDiv.textContent = 'Signup successful! Redirecting...';
        messageDiv.style.color = 'green';
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html'; // ya dashboard.html
        }, 2000);

    } catch (error) {
        console.error("Signup error:", error);
        if (error.code === 'auth/email-already-in-use') {
            messageDiv.textContent = 'This email is already registered!';
        } else {
            messageDiv.textContent = error.message;
        }
        messageDiv.style.color = 'red';
    }
});