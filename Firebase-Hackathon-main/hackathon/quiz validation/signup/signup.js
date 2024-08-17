import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

let formsfield = document.querySelectorAll("form input")
// console.log(formsfield)

const [userEmail,userPassword] = formsfield;

let sbmitbtn = document.getElementById('sbmitbtn')
const signup =() =>{
    event.preventDefault();
    sbmitbtn.innerText = 'loading......'
    createUserWithEmailAndPassword(auth, userEmail.value,userPassword.value)
    .then((userCredential) => {
       sbmitbtn.innerText = 'signup'
      const user = userCredential.user;
      Toastify({

        text: "signup succesfully",
        
        duration: 3000
        
        }).showToast();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
       sbmitbtn.innerText = 'signup'
       Toastify({

        text: `${errorMessage}`,
        
        duration: 3000
        
        }).showToast();
      // ..
    });
}

sbmitbtn.addEventListener('click',signup)



onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = '../dahboad/dashboad.html'
  
  }
});


