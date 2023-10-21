import random
import pyrebase
def insert():
 firebaseConfig ={
              "apiKey": "AIzaSyCw5jTOHFYc0sE31RycWo5O2KWCnJpEP-8",
              "authDomain": "nextpage-b8d10.firebaseapp.com",
              "databaseURL": "https://nextpage-b8d10-default-rtdb.firebaseio.com",
              "projectId": "nextpage-b8d10",
              "storageBucket": "nextpage-b8d10.appspot.com",
              "messagingSenderId": "683648768463",
              "appId": "1:683648768463:web:7deb07939391f2f972daba",
              "measurementId": "G-2ZQ4V6LBMD"
            }
            
 firebase =  pyrebase.initialize_app(firebaseConfig)
 db = firebase.database()
 data = {"name":"abdo","name2":"bdfnir"}
 db.push(data)
 db.child("topics").set(data)