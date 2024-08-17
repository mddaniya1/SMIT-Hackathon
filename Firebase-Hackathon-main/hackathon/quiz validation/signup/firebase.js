
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJTA2gVUokwVMLEsQeNS0OSFmjqYWpVc4",
  authDomain: "formlogin-83b98.firebaseapp.com",
  projectId: "formlogin-83b98",
  storageBucket: "formlogin-83b98.appspot.com",
  messagingSenderId: "795660184313",
  appId: "1:795660184313:web:ba3ef802098b522f8e9028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail }











// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyC7kvuTGvtwhv14aQCYNGUZckuKByeVkBk",
//     authDomain: "anas-login-signup-form.firebaseapp.com",
//     projectId: "anas-login-signup-form",
//     storageBucket: "anas-login-signup-form.appspot.com",
//     messagingSenderId: "216325610906",
//     appId: "1:216325610906:web:fdbeca387679f6b7d82e23",
//     measurementId: "G-TCZZKZFCTE"
//   };


//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);


//   export{auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut, sendPasswordResetEmail}
