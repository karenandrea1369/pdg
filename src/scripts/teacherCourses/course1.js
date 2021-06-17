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

    //----------------------initialize variables---------------
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

    //----------------------teacher grades unit---------------
    var unitGrade = "";
    var unitComment = "";

    var unitGradeDiv = document.getElementById("unitGrade");
    var unitCommentDiv = document.getElementById("unitComment");

    var teacherGradeSections = document.getElementById("teacherGrade").querySelectorAll(".coursecard__section");
    console.log(teacherGradeSections[1]);

    var teacherGradeStates = document.getElementById("teacherGrade").querySelectorAll(".coursecard__bottomStateCard");
    console.log(teacherGradeStates[0]);

    var teacherGradeSeeMore = document.getElementById("teacherGrade").querySelector(".textBtn");
    console.log(teacherGradeSeeMore);
    
    var checks = document.querySelectorAll(".coursecard__rateCheck");
    checks.forEach((check, index) =>{
        check.addEventListener('click', ()=>{
            checks.forEach(check2 =>{
                check2.classList.remove("coursecard__rateCheck--checked")
            });
            check.classList.add("coursecard__rateCheck--checked");
            unitGrade = check.innerText;
            console.log("nota", unitGrade);
        });
    })
    
    var teacherGradeComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment");
    teacherGradeComment.addEventListener('keyup', ()=>{
        unitComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment").value;
        console.log("comment", unitComment);
    })

    var teacherGradeCTA = document.getElementById("teacherGrade").querySelector(".ctaBtn");
    teacherGradeCTA.addEventListener('click', ()=>{
        if(!teacherGradeSections[1].classList.contains("coursecard__section--visible")){
            teacherGradeSections[1].classList.add("coursecard__section--visible");
            //aquí poner modo edicioooooooooon
        } else if(unitGrade === "" || unitComment === ""){
            console.log("nel");
            //aquí poner mensaje de alertaaaaaa
        } else {
            gradeUnit();
            //poner aquí el estado ya calificado
            teacherGradeSections[1].classList.remove("coursecard__section--visible");
            teacherGradeSections[2].classList.add("coursecard__section--visible");
            teacherGradeStates[0].classList.remove("coursecard__bottomStateCard--visible");
            teacherGradeStates[1].classList.add("coursecard__bottomStateCard--visible");
            teacherGradeCTA.classList.remove("coursecard__bottomBtn--visible");
            teacherGradeSeeMore.classList.add("coursecard__bottomBtn--visible");
            unitGradeDiv.innerText = unitGrade;
            unitCommentDiv.innerText = unitComment;
        }
    })

    function gradeUnit(){
        db.collection("courses").doc("course1").collection("units").doc("unit3").set({
                    teacherCalificated : true,
                    teacherCalification : unitGrade,
                    teacherComment : unitComment
                }, {merge:true}).then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });;
                // console.log("doc from db", doc.data().teacherCalificated);
                // console.log("doc from db", doc.data().teacherCalification);
                // console.log("doc from db", doc.data().teacherComment);
 
    }


});