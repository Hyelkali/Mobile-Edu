// // Import Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDB5rixS7Ueg6CyZJjLj-BicSOl3Vw2_ns",
//     authDomain: "mobile-edu-4cd25.firebaseapp.com",
//     projectId: "mobile-edu-4cd25",
//     storageBucket: "mobile-edu-4cd25.appspot.com",
//     messagingSenderId: "732929817353",
//     appId: "1:732929817353:web:afad5944f0c059dbb631d8",
//     measurementId: "G-DVV26HE7R8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// document.addEventListener("DOMContentLoaded", () => {
//     // Modal Handling
//     const modal = document.getElementById("authModal");
//     const closeModalSpan = document.getElementsByClassName("close")[0];
//     const openModalBtn = document.getElementById("openModal");
//     const logoutBtn = document.getElementById("logoutBtn");

//     // Show the modal when "Join Us" button is clicked
//     openModalBtn.onclick = (event) => {
//         if (!auth.currentUser) { // Show modal only if user is not authenticated
//             event.preventDefault(); // Prevent default anchor behavior
//             modal.style.display = "block"; // Show the modal
//         }
//     };

//     // Close the modal
//     closeModalSpan.onclick = () => {
//         modal.style.display = "none";
//     };

//     // Close the modal if the user clicks outside of the modal
//     window.onclick = (event) => {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     };

//     // Switch to Signup Section
//     document.getElementById("toggleToSignup").onclick = () => {
//         document.getElementById("loginSection").style.display = "none";
//         document.getElementById("signupSection").style.display = "block";
//     };

//     // Switch to Login Section
//     document.getElementById("toggleToLogin").onclick = () => {
//         document.getElementById("signupSection").style.display = "none";
//         document.getElementById("loginSection").style.display = "block";
//     };

//     // Login functionality
//     document.getElementById("loginBtn").onclick = async () => {
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             alert("Login successful!");
//             modal.style.display = "none"; // Hide the modal
//         } catch (error) {
//             alert(error.message); // Show error message
//         }
//     };

//     // Signup functionality
//     document.getElementById("signupBtn").onclick = async () => {
//         const firstName = document.getElementById("firstName").value;
//         const lastName = document.getElementById("lastName").value;
//         const email = document.getElementById("signupEmail").value;
//         const password = document.getElementById("signupPassword").value;

//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//             alert("Signup successful! Welcome, " + firstName + " " + lastName + "!");
//             modal.style.display = "none"; // Hide the modal
//         } catch (error) {
//             alert(error.message); // Show error message
//         }
//     };

//     // Google Auth functionality
//     document.getElementById("googleAuthBtn").onclick = async () => {
//         const provider = new GoogleAuthProvider();
        
//         try {
//             await signInWithPopup(auth, provider);
//             alert("Google login successful!");
//             modal.style.display = "none"; // Hide the modal
//         } catch (error) {
//             alert(error.message); // Show error message
//         }
//     };

//     // Logout functionality
//     logoutBtn.onclick = async () => {
//         try {
//             await auth.signOut();
//             alert("Logout successful!");
//         } catch (error) {
//             alert(error.message); // Show error message
//         }
//     };

//     // Auth state change listener
//     auth.onAuthStateChanged(user => {
//         if (user) {
//             // User is signed in
//             openModalBtn.style.display = "none"; // Hide "Join Us" button
//             logoutBtn.style.display = "block"; // Show "Logout" button
//         } else {
//             // No user is signed in
//             openModalBtn.style.display = "block"; // Show "Join Us" button
//             logoutBtn.style.display = "none"; // Hide "Logout" button
//         }
//     });
// });
