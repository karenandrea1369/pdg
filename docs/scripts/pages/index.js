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
firebase.initializeApp(firebaseConfig);

window.addEventListener('load', ()=>{
    
    //-----------------------------------------------------------
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    var db = firebase.firestore();
    var auth = firebase.auth();
    const loginBtn = document.querySelector('.login__button');
    //var cursos = [];

    var confirmUser = true;

    auth.onAuthStateChanged(user =>{
        if(user && confirmUser){
            console.log("user", user.uid);
            let actualUser = db.collection("people").where("id", "==", user.uid).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                    console.log('Este es su idDoc', doc.data().iddoc);
                    goToRole(doc.data().iddoc);
                });
            });
        }else{
            console.log("No hay usuario");
        }
    });

    loginBtn.addEventListener('click', ()=>{
        confirmUser = false;
        if(validate()){
            setSuccessFor(email);
            setSuccessFor(pass);
            auth.signInWithEmailAndPassword(email.value, pass.value)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log('user credential', userCredential);
                console.log('User', user);
                auth.onAuthStateChanged(user =>{
                    console.log("user", user.uid);
                    let actualUser = db.collection("people").where("id", "==", user.uid).get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            //console.log(doc.id, ' => ', doc.data());
                            //console.log('Este es su idDoc', doc.data().iddoc);
                            goToRole(doc.data().iddoc);
                        });
                    });
                });
            })
            .catch((error) => {
                if(error.code === 'auth/wrong-password'){
                    setErrorFor(pass, 'Contraseña incorrecta');
                } else if(error.code === 'auth/user-not-found'){
                    setErrorFor(email, 'El usuario no existe');
                }
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        }
    });

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

    function validate (){

        const emailValue = email.value.trim();
        const passValue = pass.value.trim();

        var val1 = false, val2 = false;

        if(emailValue === ''){
            setErrorFor(email, 'El campo es obligatorio');
        }
        else if(!isEmail(emailValue)){
            setErrorFor(email, 'El correo no es válido');
        } else {
            setSuccessFor(email);
            val1 = true;
        }

        if(passValue === ''){
            setErrorFor(pass, 'El campo es obligatorio');
        }else {
            setSuccessFor(pass);
            val2 = true;
        }

        if(val1 && val2){
            console.log('todo okkkkkkkk');
            return true;
        } else {
            console.log('algo mal');
            console.log('val1'. val1);
            console.log('val2', val2);
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

    // db.collection("Cursos").doc("Curso1").collection("2021-1").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //         cursos.push(doc.data());
    //     });
    //     // cursos.forEach((curso)=>{
    //     //     console.log(curso.Semestre);
    //     // });

    // });

    // db.collection("Cursos").doc("Curso1").collection("2021-1").doc("Informacion").get().then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //         titulo.innerHTML = `Hola ${doc.data().Profesor}`;
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     } 
    // });
});