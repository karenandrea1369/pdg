/* Expander menu */

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyDjl6bYnNz0DdeWM7hWxITVpn1BQq6SSjI",
    authDomain: "pdg-db.firebaseapp.com",
    projectId: "pdg-db",
    storageBucket: "pdg-db.appspot.com",
    messagingSenderId: "848702577304",
    appId: "1:848702577304:web:89c4212e674efb5c3bceed",
    measurementId: "G-SBDH6RW0HW"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

class ExpandMenu{

    constructor(toggleId, navBarId){
        this.toggle = document.getElementById(toggleId);
        this.navBar = document.getElementById(navBarId);
        //this.db = firebase.firestore();
    }

    expand(){
        if(this.toggle && this.navBar){
            this.toggle.addEventListener('mouseenter', ()=>{
                this.navBar.classList.add('expand');
            })

            this.toggle.addEventListener('mouseleave', ()=>{
                this.navBar.classList.remove('expand');
            })
        }
    }

    navigate(){
        var options = document.querySelectorAll(".nav__link");
        options.forEach(option =>{
            option.addEventListener('click', ()=>{
                
                console.log("desde expandmenu---->",option.getAttribute('id'))
            });
        });
    }


}

export default ExpandMenu;