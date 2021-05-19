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
    var db = firebase.firestore();
    var auth = firebase.auth();
    var cursos = [];

    auth.onAuthStateChanged(user =>{
        //console.log(user.uid);
        if(user){
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

    // db.collection("Cursos").doc("Curso1").collection("2021-1").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //         cursos.push(doc.data());
    //     });
    //     // cursos.forEach((curso)=>{
    //     //     console.log(curso.Semestre);
    //     // });

    // });

    var titulo = document.querySelector('.titulo');

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