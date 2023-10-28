import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, set, ref, get, child} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// import {click} from "https://code.jquery.com/jquery-3.7.1.min.js"
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

onAuthStateChanged(auth, (user) =>{
    if (user){
        const pfp = document.getElementById("pfp")
        const username = document.getElementById("Username")
        pfp.src = user.photoURL
        username.innerText = `${user.displayName}`
    }
})