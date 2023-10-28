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



const reqName = document.getElementById("username_for_finding")
// msg_cont.innerHTML = "<br>"
function foobar() {
  msg_cont.innerHTML += "<br> You : " + message;
  message.value = "";
}

reqName.addEventListener('keydown', (e) =>{
  if (e.keyCode === 13){
    const db = getDatabase(app)
    const reqName = document.getElementById("username_for_finding").value;
    // set(ref(db, "chats/" + ))
    get(ref(db, 'users/' + reqName))
    .then((snapshot) => {
      const pic = snapshot.val().profile_picture
      const name = snapshot.val().username
      const email = snapshot.val().email
      
      const picture = document.createElement("img")
      
      picture.className = "pfp"
      picture.src = pic
      const user_info = {
        username : document.createElement("span"),
        br : document.createElement("br"),
        pfp : picture.value
        
      }
      
      const user = document.createElement("button")
      user_info.username.className = "text"
      user.className = "btn btn-outline-*"
      user_info.username.innerHTML = name
      user.appendChild(picture)
      user.appendChild(user_info.username) 
      
      user.addEventListener("click",(e) =>{
        //select user
        onAuthStateChanged(auth, (user) => {
          if (user){
            set(ref(db, "chats/" + (name)),{
              sender : [user.displayName]
              
            })
          }
          else{
            alert("you need to be signed in to use the chat ")
          }
        })
       
            

      })

      
      
      const container = document.getElementById("rcorners2").appendChild(user);
      
      
      
      console.log();
    })
    .catch((err) => {
      console.error(err);
      alert( err )
  });
 };
})

message.addEventListener("keydown", (e) => {
  onAuthStateChanged(auth, (user) => {
  const message_value = document.getElementById("message")
  if (e.keyCode === 13 ){
    if (message_value.value != ""){
      const db = getDatabase(app)
      get(ref(db, 'users/' + reqName.value))
    .then((snapshot) => {
      const pic = snapshot.val().profile_picture
      const name = snapshot.val().username
      const email = snapshot.val().email
      const user_info = {
        username : document.createElement("span"),
        br : document.createElement("br"),
        
        
      }
      user_info.username.innerHTML = name
      let msg_cont = document.getElementById("message-container")
    let msg = document.createElement("span")
    msg.innerText = "You:" + message_value.value 
    msg.innerHTML += "<br>"
    msg_cont.appendChild(msg)
    let message_number = 0;
    
      console.log("alo")
      const db_ref = ref(db,"chats/" + name)
      console.log(name)
      set(db_ref,{
        [user.displayName] : {
          m : `${message_value.value}`,
         
        
        },
        sender : user.displayName,
        reciver : name
        
      })
      
      
    
    
    })
      
    
    }
    
  
  }
  
})
})
// document.addEventListener("DOMContentLoaded", (e) => {
//   const db_ref = ref(db,"chats/")
//   get(db_ref + name)
//   .then((snapshot) => {
//     if (snapshot.exists())
//       if (snapshot.val().reciver === user.displayName){
//         get(ref(db,"users/" + snapshot.val().sender))
//         .then((snapshot) => {
//           const pic = snapshot.val().profile_picture
//   const name = snapshot.val().username
//   const email = snapshot.val().email
//   const user_info = {
//     username : document.createElement("span"),
//     br : document.createElement("br"),
//     pfp : document.createElement("img")
    
    
//   }
//   function displayMessage(){
    
//   }
  
//   user_info.pfp.src = pic
//   user_info.pfp.className = "pfp"
//   user_info.username.innerHTML = name
//   user_info.username.className = "text"
//   user.className = "btn btn-outline-*"
//   user_info.username.innerHTML = name
//   user.appendChild(picture)
//   user.appendChild(user_info.username) 
  
//         })
//       }
//   });
// })
window.addEventListener("load", (e) => {
onAuthStateChanged(auth, (myself) => {
  console.log(myself.displayName)
  const db = getDatabase(app)
  const db_ref = ref(db,"chats/"+ myself.displayName)
  get(ref(db,"chats/"+ myself.displayName))
  .then((snapshot) => {
    console.log(snapshot.val())
    if(snapshot.exists()){
     const message = snapshot.val()
     const sender = message.sender
     console.log(sender)
     get(ref(db,"users/" + sender))
     .then((snapshot) =>{
      console.log(snapshot.val())
      const sendername = snapshot.val().username
      const pfp = snapshot.val().profile_picture
      let user_info = {
        username : document.createElement("span"),
        pfp : document.createElement("img")
      }
      user_info.username.innerHTML = sendername
      user_info.username.className = "text"
      user_info.pfp.src = snapshot.val().profile_picture
      user_info.pfp.className = "pfp"
      let user = document.createElement("button")
      user.className = "btn btn-outline-*"
      user.appendChild(user_info.pfp)
      user.appendChild(user_info.username)
      console.log(user_info.username)
      const container = document.getElementById("rcorners2").appendChild(user);
      user.addEventListener("click",(e) =>{
        get(ref(db,"chats/" + sender + myself.displayName))
        .then((snapshot) => {
          console.log("check")
          console.log(snapshot.val())
        })
      })
  
     })
    }
  })
})

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

