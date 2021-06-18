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

    var teacherGradeStates = document.getElementById("teacherGrade").querySelectorAll(".coursecard__bottomStateCard");

    var teacherGradeSeeMore = document.getElementById("teacherGrade").querySelector(".seeMoreBtn");

    var teacherGradeCancel = document.getElementById("teacherGrade").querySelector(".secondaryBtn");
    
    getTeacherGrade();
    function getTeacherGrade (){
        db.collection("courses").doc("course1").collection("units").doc("unit3").get().then((doc) =>{
            //.log(doc);
            if(doc.exists && doc.data().teacherCalificated){
                console.log("Calificación", doc.data().teacherCalificated);
                teacherGradeSections[1].classList.remove("coursecard__section--visible");
                teacherGradeSections[2].classList.remove("coursecard__section--visible");
                teacherGradeStates[0].classList.remove("coursecard__bottomStateCard--visible");
                teacherGradeStates[1].classList.add("coursecard__bottomStateCard--visible");
                teacherGradeCTA.classList.remove("coursecard__bottomBtn--visible");
                teacherGradeSeeMore.classList.add("coursecard__bottomBtn--visible");
                unitGradeDiv.innerText = doc.data().teacherCalification;
                unitCommentDiv.innerText = doc.data().teacherComment;
            }else {
                // doc.data() will be undefined in this case
                //console.log("No such document!");
            } 
        });
    }
    
    var checks = document.querySelectorAll(".coursecard__rateCheck");
    checks.forEach((check, index) =>{
        check.addEventListener('click', ()=>{
            checks.forEach(check2 =>{
                check2.classList.remove("coursecard__rateCheck--checked")
            });
            check.classList.add("coursecard__rateCheck--checked");
            unitGrade = check.innerText;
            validateGradeInput();
        });
    })
    
    var teacherGradeComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment");
    teacherGradeComment.addEventListener('keyup', ()=>{
        unitComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment").value;
        console.log("comment", unitComment);
        validateGradeInput();
    })

    var teacherGradeCTA = document.getElementById("teacherGrade").querySelector(".primaryBtn");

    validateGradeInput();
    function validateGradeInput(){
        if(teacherGradeSections[1].classList.contains("coursecard__section--visible")){
            if(unitGrade === "" || unitComment === ""){
                teacherGradeCTA.classList.add("primaryBtn--disabled");
            } else if(unitGrade != "" && unitComment != ""){
                teacherGradeCTA.classList.remove("primaryBtn--disabled");
            }
        }
    }
    teacherGradeCTA.addEventListener('click', ()=>{
        if(!teacherGradeSections[1].classList.contains("coursecard__section--visible")){
            teacherGradeSections[1].classList.add("coursecard__section--visible");
            validateGradeInput();
            //aquí poner modo edicioooooooooon
            document.getElementById("teacherGrade").querySelector(".coursecard__bottomState").classList.remove("coursecard__bottomState--visible");
            document.getElementById("teacherGrade").querySelector(".coursecard__bottomStateCard").classList.remove("coursecard__bottomStateCard--visible");
            teacherGradeCancel.classList.add("coursecard__bottomBtn--visible");
            //teacherGradeCTA.classList.add("primaryBtn--disabled");
        } else if(unitGrade === "" || unitComment === ""){
            console.log("nel");
            document.getElementById("teacherGrade").querySelector(".coursecard__bottomStateAlert").classList.add("coursecard__bottomStateAlert--visible");
            //aquí poner mensaje de alertaaaaaa
        } else {
            setTeacherGrade();
            //poner aquí el estado ya calificado
            teacherGradeCTA.classList.remove("primaryBtn--disabled");
            teacherGradeCancel.classList.remove("coursecard__bottomBtn--visible");
            document.getElementById("teacherGrade").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
            document.getElementById("teacherGrade").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
            teacherGradeSections[1].classList.remove("coursecard__section--visible");
            teacherGradeSections[2].classList.add("coursecard__section--visible");
            teacherGradeStates[0].classList.remove("coursecard__bottomStateCard--visible");
            teacherGradeStates[1].classList.add("coursecard__bottomStateCard--visible");
            teacherGradeCTA.classList.remove("coursecard__bottomBtn--visible");
            teacherGradeSeeMore.classList.add("coursecard__bottomBtn--visible", "seeMoreBtn--opened");
            teacherGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver menos";
            unitGradeDiv.innerText = unitGrade;
            unitCommentDiv.innerText = unitComment;
        }
    })
    
    teacherGradeCancel.addEventListener('click', ()=>{
        teacherGradeCTA.classList.remove("primaryBtn--disabled");
        document.getElementById("teacherGrade").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
        document.getElementById("teacherGrade").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
        teacherGradeSections[1].classList.remove("coursecard__section--visible");
        teacherGradeSections[2].classList.remove("coursecard__section--visible");
        teacherGradeStates[0].classList.add("coursecard__bottomStateCard--visible");
        teacherGradeCancel.classList.remove("coursecard__bottomBtn--visible");
    });

    teacherGradeSeeMore.addEventListener('click', ()=>{
        if(!teacherGradeSections[2].classList.contains("coursecard__section--visible")){
            teacherGradeSections[2].classList.add("coursecard__section--visible");
            teacherGradeSeeMore.classList.add("seeMoreBtn--opened");
            teacherGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver menos";
        } else {
            teacherGradeSections[2].classList.remove("coursecard__section--visible");
            teacherGradeSeeMore.classList.remove("seeMoreBtn--opened");
            teacherGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver más";
        }
    })

    function setTeacherGrade(){
        db.collection("courses").doc("course1").collection("units").doc("unit3").set({
            teacherCalificated : true,
            teacherCalification : unitGrade,
            teacherComment : unitComment
        }, {merge:true}).then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    //----------------------teacher send questions---------------
    var questionsBoxes = document.querySelectorAll(".coursecard__studentQuestionBox");
    var visibilityCheckboxes = document.querySelectorAll(".checkbox");

    visibilityCheckboxes.forEach((check, index) =>{
        check.addEventListener('change', ()=>{
           // console.log(check.checked);
            if(!check.checked){
                questionsBoxes[index].classList.add("coursecard__studentQuestionBox--disabled");
               // console.log(questionsBoxes[index]);
            } else if(check.checked){
                questionsBoxes[index].classList.remove("coursecard__studentQuestionBox--disabled");
               // console.log(questionsBoxes[index]);
            }
            validateUnitActivities();
        })
    });

    var aspects = ["","",""];
    var activities = ["","","",""];

    var aspectsInputs = document.querySelectorAll(".selfEvaluationAspect");
    aspectsInputs.forEach((aspectInput, index) =>{
        aspectInput.addEventListener('keyup', ()=>{
            aspects[index] = aspectInput.value;
            //console.log("aspect---->",index, aspects[index]);
        })
    });

    var activitiesInputs = document.querySelectorAll(".unitActivity");
    activitiesInputs.forEach((activityInput, index) =>{
        activityInput.addEventListener('keyup', ()=>{
            activities[index] = activityInput.value;
            validateUnitActivities();
           // console.log("activity---->", activities);
        })
    });

    var studentsQuestions = document.querySelector(".coursecard__studentQuestion");

    var studentsQuestionsStates = document.getElementById("studentsQuestions").querySelectorAll(".coursecard__bottomStateCard");

    var studentsQuestionsCTA = document.getElementById("studentsQuestions").querySelector(".primaryBtn");
    
    var studentsQuestionsCancel = document.getElementById("studentsQuestions").querySelector(".secondaryBtn");
    
    getEvaluationSent();
    function getEvaluationSent (){
        console.log("entroooooooo");
        db.collection("courses").doc("course1").collection("units").doc("unit3").get().then((doc) =>{
            //.log(doc);
            if(doc.exists && doc.data().evaluationSent){
                console.log("Evaluación enviada", doc.data().evaluationSent);
                studentsQuestions.classList.remove("coursecard__studentQuestion--visible");
                studentsQuestionsStates[0].classList.remove("coursecard__bottomStateCard--visible");
                studentsQuestionsStates[1].classList.add("coursecard__bottomStateCard--visible");
                studentsQuestionsCTA.classList.remove("coursecard__bottomBtn--visible");
            }else {
                // doc.data() will be undefined in this case
                //console.log("No such document!");
            } 
        });
    }

    validateUnitActivities();
    function validateUnitActivities(){
        if(studentsQuestions.classList.contains("coursecard__studentQuestion--visible")){
            var emptyActivities = activities.filter(activity => activity == "");
            //console.log(emptyActivities);
            if(visibilityCheckboxes[3].checked){
                if(emptyActivities.length <=2){
                    console.log("actividades activas");
                    studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
                } else {
                    studentsQuestionsCTA.classList.add("primaryBtn--disabled");
                }
            } else {
                console.log("actividades inactivas");
                studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
            }
        }
    }

    studentsQuestionsCTA.addEventListener('click', ()=>{
        if(!studentsQuestions.classList.contains("coursecard__studentQuestion--visible")){
            studentsQuestions.classList.add("coursecard__studentQuestion--visible");
            validateUnitActivities();
            //aquí poner modo edicioooooooooon
            document.getElementById("studentsQuestions").querySelector(".coursecard__bottomState").classList.remove("coursecard__bottomState--visible");
            document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateCard").classList.remove("coursecard__bottomStateCard--visible");
            studentsQuestionsCancel.classList.add("coursecard__bottomBtn--visible");
        } else if(studentsQuestionsCTA.classList.contains("primaryBtn--disabled")){
            console.log("nel");
            document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateAlert").classList.add("coursecard__bottomStateAlert--visible");
            //aquí poner mensaje de alertaaaaaa
        } else {
            console.log("enviooooooooo");
            setActivitiesAspects();
            //poner aquí el estado ya calificado
            studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
            studentsQuestionsCancel.classList.remove("coursecard__bottomBtn--visible");
            document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
            document.getElementById("studentsQuestions").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
            studentsQuestions.remove("coursecard__studentQuestion--visible");
            studentsQuestionsStates[0].classList.remove("coursecard__bottomStateCard--visible");
            studentsQuestionsStates[1].classList.add("coursecard__bottomStateCard--visible");
            studentsQuestionsCTA.classList.remove("coursecard__bottomBtn--visible");
        }
    })
    
    studentsQuestionsCancel.addEventListener('click', ()=>{
        studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
        document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
        document.getElementById("studentsQuestions").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
        studentsQuestions.classList.remove("coursecard__studentQuestion--visible");
        studentsQuestionsStates[0].classList.add("coursecard__bottomStateCard--visible");
        studentsQuestionsCancel.classList.remove("coursecard__bottomBtn--visible");
    });

    function setActivitiesAspects(){
        db.collection("courses").doc("course1").collection("units").doc("unit3").set({
            evaluationSent : true,
            question2 : visibilityCheckboxes[1].checked,
            question3 : visibilityCheckboxes[2].checked,
            question4 : visibilityCheckboxes[3].checked,
            question5 : visibilityCheckboxes[4].checked
        }, {merge:true}).then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

        if(visibilityCheckboxes[3].checked){
            db.collection("courses").doc("course1").collection("units").doc("unit3").set({
                activity1 : activities[0],
                activity2 : activities[1],
                activity3 : activities[2],
                activity4 : activities[3]
            }, {merge:true}).then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }

        if(visibilityCheckboxes[4].checked){
            db.collection("courses").doc("course1").collection("units").doc("unit3").set({
                aspect1 : aspects[0],
                aspect2 : aspects[1],
                aspect3 : aspects[2],
            }, {merge:true}).then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }
    }

});