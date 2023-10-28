// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { minidenticon } from 'https://cdn.jsdelivr.net/npm/minidenticons@4.2.0/minidenticons.min.js'
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword , updateProfile, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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


// Signup Function
var reg = document.getElementById("register")


const svgToDataURL = svgStr => {
	const encoded = encodeURIComponent(svgStr)
		.replace(/'/g, '%27')
		.replace(/"/g, '%22')

	const header = 'data:image/svg+xml,'
	const dataUrl = header + encoded

	return dataUrl
}


reg.addEventListener('click', (e) => {
  var username = document.getElementById("userInp").value;
  var pfp = minidenticon(username)
  var photo = svgToDataURL(pfp)
  var email = document.getElementById("emailInp").value;
  var password = document.getElementById("passInp").value;
  
createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    // Signed up 
    
    const user = userCredential.user;
    updateProfile(user, {
      displayName: username,
      photoURL: photo
    }).then(() => {
       alert("signed up " )
       console.log(user)
       document.location = "/login.html";
      
    }).catch((error) => {
      // An error occurred
      // ...
      alert(error.message)
    });
    const db = getDatabase(app);
    set(ref(db, 'users/' + username), {
        username: username,
        email: email,
        profile_picture : photo,
        uid : user.uid,
        created_at :  Date.now(),
   

      });
      
      // reference = FirebaseDatabase.getInstance().getReference("users").child("username");
    // ...
  })
  
    

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    // ..
    alert("uh oh!"+ error + errorMessage)
    console.log(errorCode+ errorMessage)

  });
});

