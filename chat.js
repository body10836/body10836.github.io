import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, set, ref, get} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

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
const msg_cont = document.getElementById("message-container")
const button = document.getElementById("zoom");
const reqName = document.getElementById("username_for_finding")
// msg_cont.innerHTML = "<br>"
function foobar() {
  const message = document.getElementById("message").value;
  msg_cont.innerHTML += "<br> You : " + message;
  message.value = "";
}

reqName.addEventListener('keydown', (e) =>{
  if (e.keyCode === 13){
    const db = getDatabase(app)
    const reqName = document.getElementById("username_for_finding").value;
    get(ref(db, 'users/' + reqName))
    .then((snapshot) => {
      const pic = snapshot.val().profile_picture
      const name = snapshot.val().username
      
      const picture = document.createElement("img")
      picture.className = "pfp"
      picture.src = pic
      const user_info = {
        username : document.createElement("span"),
        br : document.createElement('br'),
        pfp : picture.value
      }
      if (name.length >= 14 ){
        name.substring(0,12)
      }; 
      const user = document.createElement("button")
      user.className = "btn btn-outline-*"
      user_info.username.innerHTML = name
      user.appendChild(picture)
      user.appendChild(user_info.username) 
      user.appendChild(user_info.br)
      
      const container = document.getElementById("rcorners2").appendChild(user);
      
      
      console.log();
    })
    .catch((err) => {
      console.error(err);
      alert("user" +" not found "+ err )
  });
 };
})
  
  
button.addEventListener('click', (e) =>{
  alert("cdfg")
 })

// const button = document.getElementById("sub");

// button.addEventListener('click', (e) =>{
  
//   const db = getDatabase(app)
//   const username = document.getElementById("email").value
//     get(ref(db, 'users/' + (username)))
//     .then((snapshot) => {
//       const data = snapshot.val().profile_picture
//       const img = document.getElementById("pfp").src=data
//       console.log(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       alert(username +" not found "+ err )
//   });
      
//   })

