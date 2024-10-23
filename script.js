  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyA8aXyZQejDtv_4ErK8o435TCTWsTjebcw",
    authDomain: "infinity-run-1.firebaseapp.com",
    projectId: "infinity-run-1",
    storageBucket: "infinity-run-1.appspot.com",
    messagingSenderId: "424611937147",
    appId: "1:424611937147:web:e49291921391b5842c1bde",
    measurementId: "G-WZ96Y9NC7T"
  };
const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = 'home.html';
        })
        .catch((error) => {
            document.getElementById('errorMessage').innerText = error.message;
        });
});
auth.onAuthStateChanged((user) => {
    if (user) {
        window.location.href = 'home.html';
    }
});
