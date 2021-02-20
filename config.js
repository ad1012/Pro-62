import * as firebase from 'firebase';
   
const firebaseConfig = {
  apiKey: "AIzaSyAZqtPur6zpv05pmCDKQCjtJaf7eCv0xUM",
  authDomain: "school-app-1e9f4.firebaseapp.com",
  databaseURL: "https://school-app-1e9f4-default-rtdb.firebaseio.com",
  projectId: "school-app-1e9f4",
  storageBucket: "school-app-1e9f4.appspot.com",
  messagingSenderId: "294649545930",
  appId: "1:294649545930:web:ce9f2161f0f264f91b6033",
  measurementId: "G-LMHMXT7HFD"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

console.log(firebase.name);
console.log(firebase.database());
 