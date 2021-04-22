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

window.addEventListener('load', ()=>{

    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const confirmPass = document.getElementById('confirmPass');
    const signUpBtn = document.getElementById('signUpBtn');

    var auth = firebase.auth();
    var myUser;
    auth.onAuthStateChanged(user =>{
        console.log(user.uid); 
    });
    
    signUpBtn.addEventListener('click', ()=>{
        if(validate()){
            auth.createUserWithEmailAndPassword(email.value, pass.value)
            .then(credential=>{
                console.log("Exitoo");

            })
            .catch(error=>{
                console.log(error.code);
            });
        }
    });

    function validate (){
        if(confirmPass.value != pass.value){
            console.log("Contraseñas no iguales :(");
            return false;
        }
        //aqui validar correos
        return true;
    };


});