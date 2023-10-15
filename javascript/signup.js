// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

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
var user = document.getElementById("userReg")
// Signup Function
var reg = document.getElementById("register")

reg.addEventListener('click', (e) => {
  var email = document.getElementById("emailInp").value;
  var password = document.getElementById("passInp").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      var user1 = document.getElementById("userReg")

      // Signup Function
      var reg = document.getElementById("register")

      // Signed up 
      const user = userCredential.user;
      // ...
      alert("signed up!")
      document.location = "../index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert("uh oh!" + error + errorMessage)
      console.log(errorCode + errorMessage)

    });
});

