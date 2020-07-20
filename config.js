import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBGs7XQAdJ7Mi7Yx5zR1uQK7DgGjl19QxU",
  authDomain: "bedtime-stories-eb402.firebaseapp.com",
  databaseURL: "https://bedtime-stories-eb402.firebaseio.com",
  projectId: "bedtime-stories-eb402",
  storageBucket: "bedtime-stories-eb402.appspot.com",
  messagingSenderId: "515181522706",
  appId: "1:515181522706:web:a470c1d366bf91f3870dcb",
  measurementId: "G-TTZZ1EX6PM"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
