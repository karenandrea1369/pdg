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
firebase.initializeApp(firebaseConfig);

window.addEventListener('load',()=>{

    var auth = firebase.auth();
    var db = firebase.firestore();

    var signOutBtn = document.getElementById('signOutBtn');

    signOutBtn.addEventListener('click', ()=>{
        auth.signOut().then(() => {
            console.log("Cerró sesión exitosamente");
          }).catch((error) => {
            console.log(error.code);
          });
    })

});