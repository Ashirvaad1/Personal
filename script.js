import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "
AIzaSyA8aXyZQejDtv_4ErK8o435TCTWsTjebcw",
    authDomain: "infinity-run-1.firebaseapp.com",
    projectId: "infinity-run-1",
    storageBucket: "infinity-run-1.appspot.com",
    messagingSenderId: "424611937147",
    appId: "1:424611937147:web:e49291921391b5842c1bde",
    measurementId: "G-WZ96Y9NC7T"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
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
onAuthStateChanged(auth, (user) => {
    const loadingElement = document.getElementById('loading');
    const mainContent = document.getElementById('mainContent');
    try {
        if (!user) {
            console.log("No user is logged in, redirecting to login page.");
            window.location.href = 'index.html';
        } else {
            console.log("User is logged in:", user);
            loadingElement.style.display = 'none';
            mainContent.style.display = 'block';
        }
    } catch (error) {
        console.error("Auth state change error:", error.message);
    }
});
