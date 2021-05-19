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

    const form = document.getElementById('sign-up');

    const email = document.getElementById('email');
    const idDoc = document.getElementById('idDoc');
    const pass = document.getElementById('pass');
    const confirmPass = document.getElementById('confirmPass');
    const signUpBtn = document.querySelector('.login__button');

    var confirmUser = true;

    var auth = firebase.auth();
    var db = firebase.firestore();

    
    auth.onAuthStateChanged(user =>{
        //console.log(user.uid);
        if(user && confirmUser){
            console.log("user", user.uid);
            let actualUser = db.collection("people").where("id", "==", user.uid).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    console.log('Este es su idDoc', doc.data().iddoc);
                    goToRole(doc.data().iddoc);
                });
            });
        } else {
            console.log("No hay usuario iniciado");
        }
    });
    
    signUpBtn.addEventListener('click', ()=>{
        confirmUser = false;
        if(validate()){
            auth.createUserWithEmailAndPassword(email.value, pass.value)
            .then(credential=>{
                console.log("credential", credential.user.uid);
                addId(idDoc.value, credential.user.uid)
                //goToRole(idDoc.value);
            })
            .catch(error=>{
                console.log("Error creating user", error.code);
            });
        }
    });

    function addId(idDoc, id){
        db.collection("people").doc(idDoc).set({
            id : id
        }, { merge: true })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    function goToRole(idDoc){
        db.collection("people").doc(idDoc).get().then((doc) => {
            if (doc.exists) {
                if(doc.data().student){
                    window.location.href = "studentDash.html"; 
                } else if(doc.data().teacher == true && doc.data().boss == false){
                    window.location.href = "teacherDash.html";
                } else if(doc.data().teacher && doc.data().boss){
                    window.location.href = "teacherBossDash.html";
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            } 
        
        });
    }

    function persistence(){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            //return firebase.auth().signInWithEmailAndPassword(email, pass);
        })
        .catch((error) => {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
        });
    }

    function validate (){

        const emailValue = email.value.trim();
        const idDocValue = idDoc.value.trim();
        const passValue = pass.value.trim();
        const confirmPassValue = confirmPass.value.trim();

        var val1 = false, val2 = false, val3 = false;

        if(emailValue === ''){
            setErrorFor(email, 'El campo es obligatorio');
        }
        else if(!isEmail(emailValue)){
            setErrorFor(email, 'El correo no es válido');
        } else {
            setSuccessFor(email);
            val1 = true;
        }

        if(idDocValue === ''){
            setErrorFor(idDoc, 'El campo es obligatorio');
        } else {
            setSuccessFor(idDoc);
            val2 = true;
        }

        if(passValue === ''){
            setErrorFor(pass, 'El campo es obligatorio');
        }else {
            setSuccessFor(pass);
        }

        if(confirmPassValue === ''){
            setErrorFor(confirmPass, 'El campo es obligatorio');
        }else if(confirmPassValue != passValue){
            setErrorFor(confirmPass, 'Las contraseñas no coinciden');
        } else {
            setSuccessFor(confirmPass);
            val3 = true;
        }

        if(val1 && val2 && val3){
            console.log('todo okkkkkkkk');
            return true;
        } else {
            console.log('algo mal');
            return false;
        }

    };

    function setErrorFor(input, message){
        const inputBox = input.parentElement;
        const small = inputBox.querySelector('small');
        small.innerText = message;
        inputBox.classList.add('login__inputError');
    };

    function setSuccessFor(input){
        const inputBox = input.parentElement;
        inputBox.classList.remove('login__inputError');
    };

    function isEmail(email){
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

});


//console.log(input.getAttribute('id'));
/* if(input.value.trim() === ""){
    setErrorFor(input, 'El campo es obligatorio');
} else if(input.getAttribute('id') === 'email'){
    if(!isEmail(emailValue)){
        setErrorFor(input, 'El correo no es válido');
    }else{
        setSuccessFor(input);
    }
} else if(input.getAttribute('id') === 'confirmPass'){
    if(confirmPassValue != passValue){
        setErrorFor(input, 'Las contraseñas no coinciden');
    }else{
        setSuccessFor(input);
    }
} else{
    setSuccessFor(input);
}*/