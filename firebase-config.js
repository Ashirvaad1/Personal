import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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
const auth = getAuth(app);
export { auth };
