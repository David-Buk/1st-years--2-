import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn1vJUh4BBtmf9oA1teCa1VrGbNdvl1NA",
  authDomain: "smartgeekssolution2.firebaseapp.com",
  projectId: "smartgeekssolution2",
  storageBucket: "smartgeekssolution2.appspot.com",
  messagingSenderId: "930577800406",
  appId: "1:930577800406:web:01ff9647e3c826391abd77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get elements from the DOM
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Add event listener to the form
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting the default way

  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in user with Firebase Authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      alert("Logged in successfully!");
      window.location.href = "pricing.html"; // Redirect after successful login
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessageText = error.message;

      // Display the error message in the HTML
      errorMessage.textContent = `Error: ${errorMessageText}`;
    });
});
