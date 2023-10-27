// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw5jTOHFYc0sE31RycWo5O2KWCnJpEP-8",
  authDomain: "nextpage-b8d10.firebaseapp.com",
  databaseURL: "https://nextpage-b8d10-default-rtdb.firebaseio.com",
  projectId: "nextpage-b8d10",
  storageBucket: "nextpage-b8d10.appspot.com",
  messagingSenderId: "683648768463",
  appId: "1:683648768463:web:7deb07939391f2f972daba",
  measurementId: "G-2ZQ4V6LBMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const user = auth.currentUser;




//Sign in function
var signin = document.getElementById("signin")

signin.addEventListener('click', (e) => {
  var email = document.getElementById("emailInp").value;
  var password = document.getElementById("passInp").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("signed in" + " " + user.displayName )
    document.location = "/homepage.html";
    
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("uh oh!" + errorMessage + errorCode)
  });
})
  
