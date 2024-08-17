import { auth,signInWithEmailAndPassword,onAuthStateChanged, sendPasswordResetEmail } from "../signup/firebase.js";
let formsfield = document.querySelectorAll("form input");
// console.log(formsfield)

const [loginEmail,loginPassword] = formsfield;


let forgpass = document.getElementById('forgpass')
let loginbutn = document.getElementById('loginbutn')

const login = () => {
  event.preventDefault();
  loginbutn.innerText = 'loading........'
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    Toastify({

      text: `login succesfully`,
      
      duration: 3000
      
      }).showToast();
      console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     loginbutn.innerText = 'login'
    Toastify({

      text: `${errorMessage}`,
      
      duration: 3000
      
      }).showToast();
  });


}

loginbutn.addEventListener('click',login)


const forgotpass = ()=>{
  sendPasswordResetEmail(auth, loginEmail.value)
  .then(() => {
    Toastify({

      text: `forgot password succesfully`,
      
      duration: 3000
      
      }).showToast();
      console.log(user)
    // ...
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({

      text: `${errorMessage}`,
      
      duration: 3000
      
      }).showToast();
      console.log(user)
    // ...
  
  });
}



onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = '../dahboad/dashboad.html'
  
  }
});

forgpass.addEventListener('click',forgotpass)