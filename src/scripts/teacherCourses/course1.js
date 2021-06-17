//imports
import ExpandMenu from '../classes/ExpandMenu'
import ChangeTabs from '../classes/ChangeTabs';

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

    var changer = new ChangeTabs(".tabs__headerTab", ".tabs__bodyContent");
    changer.change();

    var signOutBtn = document.getElementById('signOutBtn');
    signOutBtn.addEventListener('click', ()=>{
        auth.signOut().then(() => {
            console.log("Cerró sesión exitosamente");
          }).catch((error) => {
            console.log(error.code);
          });
    })

    gradeUnit();

    function gradeUnit(){

        var grade;
        var comment;
        
        var checks = document.querySelectorAll(".coursecard__rateCheck");
        checks.forEach((check, index) =>{
            check.addEventListener('click', ()=>{
                checks.forEach(check2 =>{
                    check2.classList.remove("coursecard__rateCheck--checked")
                });
                check.classList.add("coursecard__rateCheck--checked");
                grade = check.innerText;
                console.log("nota",grade);
            });
        })
        
        var teacherGradeComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment");
        teacherGradeComment.addEventListener('keyup', ()=>{
            comment = document.getElementById("teacherGrade").querySelector(".coursecard__comment").value;
            console.log("comment", comment);
        })

        var teacherGradeSections = document.getElementById("teacherGrade").querySelectorAll(".coursecard__section");
        console.log(teacherGradeSections[1]);
    
        var teacherGradeStates = document.getElementById("teacherGrade").querySelectorAll(".coursecard__bottomStateCard");
        console.log(teacherGradeStates[0]);
    
        var teacherGradeSeeMore = document.getElementById("teacherGrade").querySelector(".coursecard__bottomTextBtn");
        console.log(teacherGradeSeeMore);
    
        var teacherGradeCTA = document.getElementById("teacherGrade").querySelector(".coursecard__bottomCTA");
        console.log(teacherGradeCTA);

        db.collection("courses").doc("course1").collection("units").doc("unit3").get().then((doc) => {
            if (doc.exists) {
                console.log("doc from db", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            } 
        
        });
    }


});