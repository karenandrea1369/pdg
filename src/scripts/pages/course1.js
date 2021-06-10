import ExpandMenu from '../classes/ExpandMenu';
import ReadPdf from '../classes/ReadPdf';
import FillFields from '../classes/FillFields';

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


    var input = document.getElementById("file-id");

    //--------------------------- SYLLABUS FIELDS ------------------------------
    var fields = [
        {
            "field" : "Parte 1:",
            "exist" : false,
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Código-Curso:",
            "exist" : false,
            "input" : "name",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Tiene como prerrequisito:",
            "exist" : false,
            "input" : "pre",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Programa-Semestre:",
            "exist" : false,
            "input" : "career",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Intensidad semanal:",
            "exist" : false,
            "input" : "weekhours",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Créditos:",
            "exist" : false,
            "input" : "credits",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Objetivo General:",
            "exist" : false,
            "input" : "generalobj",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Parte 2:",
            "exist" : false,
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Objetivos terminales",
            "exist" : false,
            "input" : "terminalobj",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Parte 3: Objetivos Específicos",
            "exist" : false,
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Unidad 1:",
            "exist" : false,
            "input" : "unit1",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Unidad 2:",
            "exist" : false,
            "input" : "unit2",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Unidad 3:",
            "exist" : false,
            "input" : "unit3",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Unidad 4:",
            "exist" : false,
            "input" : "unit4",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Unidad 5:",
            "exist" : false,
            "input" : "unit5",
            "start" : 0,
            "end" : 0,
            "content" : ""
        },
        {
            "field" : "Unidad 6:",
            "exist" : false,
            "input" : "unit6",
            "start" : "",
            "end" : 0,
            "content" : ""
        },
    ]


    //--------------------------- READ PDF ------------------------------
    input.addEventListener('change', ()=>{
        resetFields(fields);
        var readPdf = new ReadPdf(fields, input);
        readPdf.extractText();
        console.log("get fields", readPdf.getFields());
        fields = readPdf.getFields();
        //console.log(fields);
        fillFields(fields);
    })

    function fillFields(fields1){
        console.log(fields1);
        console.log(fields1[0]);
        for (let i = 0; i < fields.length; i++) {
            console.log(fields1[i]);
        }
        fields1.forEach(field =>{
        });
        
    }

    function resetFields(fields){
        fields.forEach(field =>{
            field.exist = false;
            field.start = 0;
            field.end = 0;
            field.content = "";
        })
    }
 

});