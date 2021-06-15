//imports
import ExpandMenu from '../classes/ExpandMenu';

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

    var expander = new ExpandMenu('navBar', 'navBar');
    expander.expand();

    var signOutBtn = document.getElementById('signOutBtn');
    console.log("Cerrar sesión", signOutBtn);
    signOutBtn.addEventListener('click', ()=>{
        auth.signOut().then(() => {
            console.log("Cerró sesión exitosamente");
            window.location.href = "index.html";
        }).catch((error) => {
            console.log(error.code);
        });
    })
    
    var notifications = document.querySelectorAll(".dashboard__notification");
    notifications.forEach(notification =>{
        var idCourse = notification.getAttribute("id");
        
        db.collection("courses").doc(idCourse).get().then((doc) => {
            if (doc.exists) {
                if(doc.data().notifications){
                    notification.classList.add("dashboard__notification--visible");
                    notification.innerHTML = doc.data().notifications + ' <ion-icon name="arrow-forward-outline"></ion-icon>';
                    console.log("id", idCourse, doc.data().notifications);
                }
            } else {
                notification.classList.remove("dashboard__notification--visible");
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        });
        notification.addEventListener('click', ()=>{
            
        });
    })

});