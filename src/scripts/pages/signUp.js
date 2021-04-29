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
    const idDoc = document.getElementById('idDoc');
    const pass = document.getElementById('pass');
    const confirmPass = document.getElementById('confirmPass');
    const signUpBtn = document.getElementById('signUpBtn');

    var auth = firebase.auth();
    var db = firebase.firestore();

    
    auth.onAuthStateChanged(user =>{
        //console.log(user.uid);
        if(user){
            console.log("user", user.uid);
            let actualUser = db.collection("people").where("id", "==", user.uid);
            console.log('Lo encontré', actualUser);
            console.log('Este es su idDoc', actualUser.idDoc);
        }
    });
    
    signUpBtn.addEventListener('click', ()=>{
        if(validate()){
            auth.createUserWithEmailAndPassword(email.value, pass.value)
            .then(credential=>{
                console.log("credential", credential.user.uid);
                addId(idDoc.value, credential.user.uid)
                //goToRole(idDoc.value);
            })
            .catch(error=>{
                console.log(error.code);
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
        if(confirmPass.value != pass.value){
            console.log("Contraseñas no iguales :(");
            return false;
            //poner para mostrar el error
        }
        //aqui validar correos
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email.value).toLowerCase());
        //poner para mostrar el error
    };


});