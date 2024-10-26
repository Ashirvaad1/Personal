import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
document.getElementById('loginButton').addEventListener('click', async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful:", userCredential);
        window.location.href = 'home.html';
    } catch (error) {
        console.error("Login error:", error.message);
        document.getElementById('errorMessage').innerText = "Login failed: " + error.message;
    }
});
