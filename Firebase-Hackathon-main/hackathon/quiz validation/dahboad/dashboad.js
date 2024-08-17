import { auth,signOut,onAuthStateChanged} from "../signup/firebase.js";

let logout = document.getElementById('logout')


const logoutid = ()=>{
    signOut(auth).then(() => {
        Toastify({

            text: "logout succesfully",
            
            duration: 3000
            
            }).showToast();
      
      }).catch((error) => {
        Toastify({

            text: `${error}`,
            
            duration: 3000
            
            }).showToast();
     
      });

}

logout.addEventListener('click',logoutid)


onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = '../login/login.html'
    
    }
  });
