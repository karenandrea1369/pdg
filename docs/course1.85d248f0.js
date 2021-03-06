// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/classes/ExpandMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Expander menu */
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
}; // Initialize Firebase
//firebase.initializeApp(firebaseConfig);

var ExpandMenu = /*#__PURE__*/function () {
  function ExpandMenu(toggleId, navBarId) {
    _classCallCheck(this, ExpandMenu);

    this.toggle = document.getElementById(toggleId);
    this.navBar = document.getElementById(navBarId); //this.db = firebase.firestore();
  }

  _createClass(ExpandMenu, [{
    key: "expand",
    value: function expand() {
      var _this = this;

      if (this.toggle && this.navBar) {
        this.toggle.addEventListener('mouseenter', function () {
          _this.navBar.classList.add('expand');
        });
        this.toggle.addEventListener('mouseleave', function () {
          _this.navBar.classList.remove('expand');
        });
      }
    }
  }, {
    key: "navigate",
    value: function navigate() {
      var options = document.querySelectorAll(".nav__link");
      options.forEach(function (option) {
        option.addEventListener('click', function () {
          console.log("desde expandmenu---->", option.getAttribute('id'));
        });
      });
    }
  }]);

  return ExpandMenu;
}();

var _default = ExpandMenu;
exports.default = _default;
},{}],"../scripts/classes/ChangeTabs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChangeTabs = /*#__PURE__*/function () {
  function ChangeTabs(tabs__headerTab, tabs__bodyContent) {
    _classCallCheck(this, ChangeTabs);

    this.tabs = document.querySelectorAll(tabs__headerTab);
    this.contents = document.querySelectorAll(tabs__bodyContent); //this.db = firebase.firestore();
  }

  _createClass(ChangeTabs, [{
    key: "change",
    value: function change() {
      var _this = this;

      this.tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
          _this.tabs.forEach(function (otherTab) {
            otherTab.classList.remove("tabs__headerTab--active");
          });

          _this.contents.forEach(function (otherContent) {
            otherContent.classList.remove("tabs__bodyContent--active");
          });

          tab.classList.add("tabs__headerTab--active");

          _this.contents[index].classList.add("tabs__bodyContent--active");
        });
      });
    }
  }]);

  return ChangeTabs;
}();

var _default = ChangeTabs;
exports.default = _default;
},{}],"scripts/teacherCourses/course1.js":[function(require,module,exports) {
"use strict";

var _ExpandMenu = _interopRequireDefault(require("../classes/ExpandMenu"));

var _ChangeTabs = _interopRequireDefault(require("../classes/ChangeTabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//imports
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyDjl6bYnNz0DdeWM7hWxITVpn1BQq6SSjI",
  authDomain: "pdg-db.firebaseapp.com",
  projectId: "pdg-db",
  storageBucket: "pdg-db.appspot.com",
  messagingSenderId: "848702577304",
  appId: "1:848702577304:web:89c4212e674efb5c3bceed",
  measurementId: "G-SBDH6RW0HW"
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);
window.addEventListener('load', function () {
  //----------------------initialize variables---------------
  var auth = firebase.auth();
  var db = firebase.firestore();
  var expander = new _ExpandMenu.default('navBar', 'navBar');
  expander.expand();
  var changer = new _ChangeTabs.default(".tabs__headerTab", ".tabs__bodyContent");
  changer.change();
  var signOutBtn = document.getElementById('signOutBtn');
  signOutBtn.addEventListener('click', function () {
    auth.signOut().then(function () {
      console.log("Cerr?? sesi??n exitosamente");
      window.location.href = "index.html";
    }).catch(function (error) {
      console.log(error.code);
    });
  });
  var studentsQuestionsCTA = document.getElementById("studentsQuestions").querySelector(".primaryBtn");
  var seeMoreAnswers = document.querySelectorAll(".coursecard__answersBtn"); //----------------------see more unit 1 and 2---------------
  //id="unit2SeeMore"

  var unit1Sections = document.getElementById("unit1SeeMore").querySelectorAll(".coursecard__section");
  var unit1SeeMore = document.getElementById("unit1SeeMore").querySelector(".seeMoreBtn");
  unit1SeeMore.addEventListener('click', function () {
    if (!unit1Sections[1].classList.contains("coursecard__section--visible")) {
      unit1Sections[1].classList.add("coursecard__section--visible");
      unit1SeeMore.classList.add("seeMoreBtn--opened");
      unit1SeeMore.getElementsByTagName("p")[0].innerText = "Ver menos";
    } else {
      unit1Sections[1].classList.remove("coursecard__section--visible");
      unit1SeeMore.classList.remove("seeMoreBtn--opened");
      unit1SeeMore.getElementsByTagName("p")[0].innerText = "Ver m??s";
    }
  });
  var unit2Sections = document.getElementById("unit2SeeMore").querySelectorAll(".coursecard__section");
  var unit2SeeMore = document.getElementById("unit2SeeMore").querySelector(".seeMoreBtn");
  unit2SeeMore.addEventListener('click', function () {
    if (!unit2Sections[1].classList.contains("coursecard__section--visible")) {
      unit2Sections[1].classList.add("coursecard__section--visible");
      unit2SeeMore.classList.add("seeMoreBtn--opened");
      unit2SeeMore.getElementsByTagName("p")[0].innerText = "Ver menos";
    } else {
      unit2Sections[1].classList.remove("coursecard__section--visible");
      unit2SeeMore.classList.remove("seeMoreBtn--opened");
      unit2SeeMore.getElementsByTagName("p")[0].innerText = "Ver m??s";
    }
  }); //----------------------teacher grades unit---------------

  var unitGrade = "0";
  var unitComment = "";
  var termObjGraded = false;
  var teacherCalificated = false;
  var unitGradeDiv = document.getElementById("unitGrade");
  var unitCommentDiv = document.getElementById("unitComment");
  var teacherGradeSections = document.getElementById("teacherGrade").querySelectorAll(".coursecard__section");
  var teacherGradeStates = document.getElementById("teacherGrade").querySelectorAll(".coursecard__bottomStateCard");
  var teacherGradeSeeMore = document.getElementById("teacherGrade").querySelector(".seeMoreBtn");
  var teacherGradeCancel = document.getElementById("teacherGrade").querySelector(".secondaryBtn");
  getTeacherGrade();

  function getTeacherGrade() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").get().then(function (doc) {
      //.log(doc);
      if (doc.exists && doc.data().teacherCalificated) {
        console.log("Calificaci??n", doc.data().teacherCalificated);
        teacherGradeSections[1].classList.remove("coursecard__section--visible");
        teacherGradeSections[2].classList.remove("coursecard__section--visible");
        teacherGradeStates[0].classList.remove("coursecard__bottomStateCard--visible");
        teacherGradeStates[1].classList.add("coursecard__bottomStateCard--visible");
        teacherGradeCTA.classList.remove("coursecard__bottomBtn--visible");
        teacherGradeSeeMore.classList.add("coursecard__bottomBtn--visible");
        console.log("calification", doc.data().teacherCalification);
        console.log("comment", doc.data().teacherComment);
        unitGradeDiv.innerText = doc.data().teacherCalification;
        unitGrade = doc.data().teacherCalification;
        unitCommentDiv.innerText = doc.data().teacherComment;
        unitComment = doc.data().teacherComment;
        studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
        setGradeToReportGraphic();
        emptyCalifications[2].classList.remove("emptyCalification--visible");
        validateReportSend();
      } else {// doc.data() will be undefined in this case
        //console.log("No such document!");
      }
    });
  }

  var checks = document.getElementById("unitGradeRate").querySelectorAll(".coursecard__rateCheck");
  unitGradeCheck(checks);

  function unitGradeCheck(checksArray) {
    checksArray.forEach(function (check, index) {
      check.addEventListener('click', function () {
        checks.forEach(function (check2) {
          check2.classList.remove("coursecard__rateCheck--checked");
        });
        check.classList.add("coursecard__rateCheck--checked");
        unitGrade = check.innerText;
        validateGradeInput();
      });
    });
  }

  var teacherGradeComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment");
  teacherGradeComment.addEventListener('keyup', function () {
    unitComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment").value;
    validateGradeInput();
  });
  var teacherGradeCTA = document.getElementById("teacherGrade").querySelector(".primaryBtn");
  validateGradeInput();

  function validateGradeInput() {
    if (teacherGradeSections[1].classList.contains("coursecard__section--visible")) {
      if (unitGrade === "" || unitComment === "") {
        teacherGradeCTA.classList.add("primaryBtn--disabled");
      } else if (unitGrade != "" && unitComment != "") {
        teacherGradeCTA.classList.remove("primaryBtn--disabled");
      }
    }
  }

  teacherGradeCTA.addEventListener('click', function () {
    if (!teacherGradeSections[1].classList.contains("coursecard__section--visible")) {
      teacherGradeSections[1].classList.add("coursecard__section--visible");
      validateGradeInput(); //aqu?? poner modo edicioooooooooon

      document.getElementById("teacherGrade").querySelector(".coursecard__bottomState").classList.remove("coursecard__bottomState--visible");
      document.getElementById("teacherGrade").querySelector(".coursecard__bottomStateCard").classList.remove("coursecard__bottomStateCard--visible");
      teacherGradeCancel.classList.add("coursecard__bottomBtn--visible"); //teacherGradeCTA.classList.add("primaryBtn--disabled");
    } else if (unitGrade === "" || unitComment === "") {
      console.log("nel");
      document.getElementById("teacherGrade").querySelector(".coursecard__bottomStateAlert").classList.add("coursecard__bottomStateAlert--visible"); //aqu?? poner mensaje de alertaaaaaa
    } else {
      emptyCalifications[2].classList.remove("emptyCalification--visible"); //poner aqu?? el estado ya calificado

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
      studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
      setTeacherGrade();
      setGradeToReportGraphic();
      validateReportSend();
    }
  });
  teacherGradeCancel.addEventListener('click', function () {
    teacherGradeCTA.classList.remove("primaryBtn--disabled");
    document.getElementById("teacherGrade").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
    document.getElementById("teacherGrade").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
    teacherGradeSections[1].classList.remove("coursecard__section--visible");
    teacherGradeSections[2].classList.remove("coursecard__section--visible");
    teacherGradeStates[0].classList.add("coursecard__bottomStateCard--visible");
    teacherGradeCancel.classList.remove("coursecard__bottomBtn--visible");
  });
  teacherGradeSeeMore.addEventListener('click', function () {
    if (!teacherGradeSections[2].classList.contains("coursecard__section--visible")) {
      teacherGradeSections[2].classList.add("coursecard__section--visible");
      teacherGradeSeeMore.classList.add("seeMoreBtn--opened");
      teacherGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver menos";
    } else {
      teacherGradeSections[2].classList.remove("coursecard__section--visible");
      teacherGradeSeeMore.classList.remove("seeMoreBtn--opened");
      teacherGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver m??s";
    }
  });

  function setTeacherGrade() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").set({
      teacherCalificated: true,
      teacherCalification: unitGrade,
      teacherComment: unitComment
    }, {
      merge: true
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  } //----------------------teacher send questions---------------


  var questionsBoxes = document.querySelectorAll(".coursecard__studentQuestionBox");
  var visibilityCheckboxes = document.querySelectorAll(".checkbox");
  var studentsAnswersStates = document.getElementById("studentsAnswers").querySelectorAll(".coursecard__bottomStateCard");
  visibilityCheckboxes.forEach(function (check, index) {
    check.addEventListener('change', function () {
      // console.log(check.checked);
      if (!check.checked) {
        questionsBoxes[index].classList.add("coursecard__studentQuestionBox--disabled"); // console.log(questionsBoxes[index]);
      } else if (check.checked) {
        questionsBoxes[index].classList.remove("coursecard__studentQuestionBox--disabled"); // console.log(questionsBoxes[index]);
      }

      validateUnitActivities();
    });
  });
  var studentsQuestions = document.querySelector(".coursecard__studentQuestion");
  var studentsQuestionsStates = document.getElementById("studentsQuestions").querySelectorAll(".coursecard__bottomStateCard");
  var studentsQuestionsCancel = document.getElementById("studentsQuestions").querySelector(".secondaryBtn");
  getEvaluationSent();

  function getEvaluationSent() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").get().then(function (doc) {
      //.log(doc);
      if (doc.exists && doc.data().evaluationSent) {
        console.log("Evaluaci??n enviada", doc.data().evaluationSent);
        studentsQuestions.classList.remove("coursecard__studentQuestion--visible");
        studentsQuestionsStates[0].classList.remove("coursecard__bottomStateCard--visible");
        studentsQuestionsStates[1].classList.add("coursecard__bottomStateCard--visible");
        studentsAnswersStates[0].classList.remove("coursecard__bottomStateCard--visible");
        studentsAnswersStates[1].classList.add("coursecard__bottomStateCard--visible");
        studentsQuestionsCTA.classList.remove("coursecard__bottomBtn--visible");
        seeMoreAnswers[2].classList.remove("seeMoreBtn--disabled");
      } else {// doc.data() will be undefined in this case
        //console.log("No such document!");
      }
    });
  }

  var aspects = ["", "", ""];
  var activities = ["", "", "", ""];
  var aspectsInputs = document.querySelectorAll(".selfEvaluationAspect");
  aspectsInputs.forEach(function (aspectInput, index) {
    aspectInput.addEventListener('keyup', function () {
      aspects[index] = aspectInput.value; //console.log("aspect---->",index, aspects[index]);
    });
  });
  var activitiesInputs = document.querySelectorAll(".unitActivity");
  activitiesInputs.forEach(function (activityInput, index) {
    activityInput.addEventListener('keyup', function () {
      activities[index] = activityInput.value;
      validateUnitActivities(); // console.log("activity---->", activities);
    });
  });
  validateUnitActivities();

  function validateUnitActivities() {
    if (studentsQuestions.classList.contains("coursecard__studentQuestion--visible")) {
      var emptyActivities = activities.filter(function (activity) {
        return activity == "";
      }); //console.log(emptyActivities);

      if (visibilityCheckboxes[3].checked) {
        if (emptyActivities.length <= 2) {
          //console.log("actividades activas");
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

  studentsQuestionsCTA.addEventListener('click', function () {
    if (!studentsQuestionsCTA.classList.contains("primaryBtn--disabled")) {
      if (!studentsQuestions.classList.contains("coursecard__studentQuestion--visible")) {
        studentsQuestions.classList.add("coursecard__studentQuestion--visible");
        validateUnitActivities(); //aqu?? poner modo edicioooooooooon

        document.getElementById("studentsQuestions").querySelector(".coursecard__bottomState").classList.remove("coursecard__bottomState--visible");
        document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateCard").classList.remove("coursecard__bottomStateCard--visible");
        studentsQuestionsCancel.classList.add("coursecard__bottomBtn--visible");
      } else if (studentsQuestionsCTA.classList.contains("primaryBtn--disabled")) {
        console.log("nel");
        document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateAlert").classList.add("coursecard__bottomStateAlert--visible"); //aqu?? poner mensaje de alertaaaaaa
      } else {
        setAnswersVisibility(); //volver visibles las gr??ficas

        if (visibilityCheckboxes[1].checked) answersBoxes[1].classList.add("answerBox--visible");
        if (visibilityCheckboxes[2].checked) answersBoxes[2].classList.add("answerBox--visible");
        if (visibilityCheckboxes[3].checked) answersBoxes[3].classList.add("answerBox--visible");
        if (visibilityCheckboxes[4].checked) answersBoxes[4].classList.add("answerBox--visible"); //poner aqu?? el estado ya calificado

        studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
        studentsQuestionsCancel.classList.remove("coursecard__bottomBtn--visible");
        document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
        document.getElementById("studentsQuestions").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
        studentsQuestions.remove("coursecard__studentQuestion--visible");
        studentsQuestionsStates[0].classList.remove("coursecard__bottomStateCard--visible");
        studentsQuestionsStates[1].classList.add("coursecard__bottomStateCard--visible");
        studentsAnswersStates[0].classList.remove("coursecard__bottomStateCard--visible");
        studentsAnswersStates[1].classList.add("coursecard__bottomStateCard--visible");
        studentsQuestionsCTA.classList.remove("coursecard__bottomBtn--visible");
        seeMoreAnswers[2].classList.remove("seeMoreBtn--disabled");
      }
    }
  });
  studentsQuestionsCancel.addEventListener('click', function () {
    studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
    document.getElementById("studentsQuestions").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
    document.getElementById("studentsQuestions").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
    studentsQuestions.classList.remove("coursecard__studentQuestion--visible");
    studentsQuestionsStates[0].classList.add("coursecard__bottomStateCard--visible");
    studentsQuestionsCancel.classList.remove("coursecard__bottomBtn--visible");
  });

  function setAnswersVisibility() {
    console.log("holaaaaaaaaaaaaaaaa2");
    db.collection("courses").doc("course1").collection("units").doc("unit3").set({
      evaluationSent: true,
      question2: visibilityCheckboxes[1].checked,
      question3: visibilityCheckboxes[2].checked,
      question4: visibilityCheckboxes[3].checked,
      question6: visibilityCheckboxes[4].checked
    }, {
      merge: true
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  } //----------------------teacher sees answers---------------


  var answersSection = document.querySelectorAll(".coursecard__answers");
  var answersBoxes = document.querySelectorAll(".answerBox");
  var answersBoxesVisibility = [];
  getAnswersVisibility();

  function getAnswersVisibility() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").get().then(function (doc) {
      //.log(doc);
      if (doc.exists && doc.data().evaluationSent) {
        answersBoxesVisibility[0] = doc.data().question2;
        answersBoxesVisibility[1] = doc.data().question3;
        answersBoxesVisibility[2] = doc.data().question4;
        answersBoxesVisibility[3] = doc.data().question6;
        setAnswersDivVisibility();
        console.log("holaaaaaaaaaaaaaaaaaaaaa");
        seeMoreAnswers[2].classList.remove("seeMoreBtn--disabled");
      } else {// doc.data() will be undefined in this case
        //console.log("No such document!");
      }
    });
  }

  function setAnswersDivVisibility() {
    if (answersBoxesVisibility[0]) answersBoxes[1].classList.add("answerBox--visible");
    if (answersBoxesVisibility[1]) answersBoxes[2].classList.add("answerBox--visible");
    if (answersBoxesVisibility[2]) answersBoxes[3].classList.add("answerBox--visible");
    if (answersBoxesVisibility[3]) answersBoxes[4].classList.add("answerBox--visible");
  }

  seeMoreAnswers.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      if (!btn.classList.contains("seeMoreBtn--disabled")) {
        if (!btn.classList.contains("seeMoreBtn--opened")) {
          btn.classList.add("seeMoreBtn--opened");
          btn.getElementsByTagName("p")[0].innerText = "Ocultar respuestas";
          answersSection[index].classList.add("coursecard__answers--visible");
        } else {
          btn.classList.remove("seeMoreBtn--opened");
          btn.getElementsByTagName("p")[0].innerText = "Ver respuestas";
          answersSection[index].classList.remove("coursecard__answers--visible");
        }
      }
    });
  }); //----------------------teacher grade term obj---------------

  var termObjtGrades = ["", "", "", "", ""]; //from db

  var termObj1RateChecks = document.getElementById("termObj1Rate").querySelectorAll(".coursecard__rateCheck");
  var termObj1Grades = document.querySelectorAll(".termObj1Grade");
  reportChecks(termObj1RateChecks, 0);
  var termObj2RateChecks = document.getElementById("termObj2Rate").querySelectorAll(".coursecard__rateCheck");
  var termObj2Grades = document.querySelectorAll(".termObj2Grade");
  reportChecks(termObj2RateChecks, 1);
  var termObj3RateChecks = document.getElementById("termObj3Rate").querySelectorAll(".coursecard__rateCheck");
  var termObj3Grades = document.querySelectorAll(".termObj3Grade");
  reportChecks(termObj3RateChecks, 2);
  var termObj4RateChecks = document.getElementById("termObj4Rate").querySelectorAll(".coursecard__rateCheck");
  var termObj4Grades = document.querySelectorAll(".termObj4Grade");
  reportChecks(termObj4RateChecks, 3);
  var termObj5RateChecks = document.getElementById("termObj5Rate").querySelectorAll(".coursecard__rateCheck");
  var termObj5Grades = document.querySelectorAll(".termObj5Grade");
  reportChecks(termObj5RateChecks, 4);
  var termObjGradeSections = document.getElementById("termObjGrade").querySelectorAll(".coursecard__section");
  var termObjGradeStates = document.getElementById("termObjGrade").querySelectorAll(".coursecard__bottomStateCard");
  var termObjGradeSeeMore = document.getElementById("termObjGrade").querySelector(".seeMoreBtn");
  var termObjGradeCancel = document.getElementById("termObjGrade").querySelector(".secondaryBtn");
  var termObjGradeCTA = document.getElementById("termObjGrade").querySelector(".primaryBtn");
  var emptyCalifications = document.querySelectorAll(".emptyCalification"); //listaaaa

  getTermObjGrade();

  function getTermObjGrade() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").get().then(function (doc) {
      //.log(doc);
      if (doc.exists && doc.data().termObjGraded) {
        termObjGradeStates[0].classList.remove("coursecard__bottomStateCard--visible");
        termObjGradeStates[1].classList.add("coursecard__bottomStateCard--visible");
        termObjGradeCTA.classList.remove("coursecard__bottomBtn--visible");
        termObjGradeSeeMore.classList.add("coursecard__bottomBtn--visible");
        termObjtGrades = [doc.data().termObj1, doc.data().termObj2, doc.data().termObj3, doc.data().termObj4, doc.data().termObj5];
        settermObjGradeToDivs(termObjtGrades);
        validateReportSend(); //ocultar los rates

        emptyCalifications[0].classList.remove("emptyCalification--visible");
        emptyCalifications[1].classList.add("emptyCalification--visible");
        document.getElementById("termObj1Rate").classList.add("coursecard__rate--hidden");
        document.getElementById("termObj2Rate").classList.add("coursecard__rate--hidden");
        document.getElementById("termObj3Rate").classList.add("coursecard__rate--hidden");
        document.getElementById("termObj4Rate").classList.add("coursecard__rate--hidden");
        document.getElementById("termObj5Rate").classList.add("coursecard__rate--hidden"); //mostrar los resultados

        document.getElementById("termObjGradeChange").innerText = "Grado en que los estudiantes alcanzaron los objetivos terminales del curso.";
        termObj1Grades[0].classList.add("termObj1Grade--visible");
        termObj2Grades[0].classList.add("termObj2Grade--visible");
        termObj3Grades[0].classList.add("termObj3Grade--visible");
        termObj4Grades[0].classList.add("termObj4Grade--visible");
        termObj5Grades[0].classList.add("termObj5Grade--visible"); //studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
      } else {// doc.data() will be undefined in this case
          //console.log("No such document!");
        }
    });
  } //listaaaa


  function settermObjGradeToDivs(array) {
    //set to termobj1
    termObj1Grades[0].innerText = array[0];
    termObj1Grades[1].innerText = array[0]; //set to termobj2

    termObj2Grades[0].innerText = array[1];
    termObj2Grades[1].innerText = array[1]; //set to termobj3

    termObj3Grades[0].innerText = array[2];
    termObj3Grades[1].innerText = array[2]; //set to termobj4

    termObj4Grades[0].innerText = array[3];
    termObj4Grades[1].innerText = array[3]; //set to termobj5

    termObj5Grades[0].innerText = array[4];
    termObj5Grades[1].innerText = array[4];
  }

  validateTermObjGrade();
  termObjGradeCTA.addEventListener('click', function () {
    if (!termObjGradeSections[1].classList.contains("coursecard__section--visible")) {
      termObjGradeSections[1].classList.add("coursecard__section--visible"); //aqu?? poner modo edicioooooooooon

      document.getElementById("termObjGrade").querySelector(".coursecard__bottomState").classList.remove("coursecard__bottomState--visible");
      document.getElementById("termObjGrade").querySelector(".coursecard__bottomStateCard").classList.remove("coursecard__bottomStateCard--visible");
      termObjGradeCancel.classList.add("coursecard__bottomBtn--visible");
      termObjGradeCTA.classList.add("primaryBtn--disabled");
    } else if (termObjtGrades.includes("")) {
      document.getElementById("termObjGrade").querySelector(".coursecard__bottomStateAlert").classList.add("coursecard__bottomStateAlert--visible"); //aqu?? poner mensaje de alertaaaaaa
    } else {
      settermObjGrade();
      validateReportSend(); //poner aqu?? el estado ya calificado

      termObjGradeCTA.classList.remove("primaryBtn--disabled");
      termObjGradeCTA.classList.remove("coursecard__bottomBtn--visible");
      termObjGradeCancel.classList.remove("coursecard__bottomBtn--visible");
      document.getElementById("termObjGrade").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
      document.getElementById("termObjGrade").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
      termObjGradeStates[0].classList.remove("coursecard__bottomStateCard--visible");
      termObjGradeStates[1].classList.add("coursecard__bottomStateCard--visible");
      termObjGradeSeeMore.classList.add("coursecard__bottomBtn--visible", "seeMoreBtn--opened");
      termObjGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver menos";
      studentsQuestionsCTA.classList.remove("primaryBtn--disabled");
      settermObjGradeToDivs(termObjtGrades); //ocultar los rates

      emptyCalifications[0].classList.remove("emptyCalification--visible");
      emptyCalifications[1].classList.add("emptyCalification--visible");
      document.getElementById("termObj1Rate").classList.add("coursecard__rate--hidden");
      document.getElementById("termObj2Rate").classList.add("coursecard__rate--hidden");
      document.getElementById("termObj3Rate").classList.add("coursecard__rate--hidden");
      document.getElementById("termObj4Rate").classList.add("coursecard__rate--hidden");
      document.getElementById("termObj5Rate").classList.add("coursecard__rate--hidden"); //mostrar los resultados

      document.getElementById("termObjGradeChange").innerText = "Grado en que los estudiantes alcanzaron los objetivos terminales del curso.";
      termObj1Grades[0].classList.add("termObj1Grade--visible");
      termObj2Grades[0].classList.add("termObj2Grade--visible");
      termObj3Grades[0].classList.add("termObj3Grade--visible");
      termObj4Grades[0].classList.add("termObj4Grade--visible");
      termObj5Grades[0].classList.add("termObj5Grade--visible");
    }
  }); //listaaaa

  function validateTermObjGrade() {
    if (!termObjtGrades.includes("")) {
      termObjGradeCTA.classList.remove("primaryBtn--disabled");
    }
  } //listaaaa


  function reportChecks(checksArray, objNum) {
    checksArray.forEach(function (check, index) {
      check.addEventListener('click', function () {
        checksArray.forEach(function (check2) {
          check2.classList.remove("coursecard__rateCheck--checked");
        });
        check.classList.add("coursecard__rateCheck--checked");
        termObjtGrades[objNum] = check.innerText;
        validateTermObjGrade(); //unitGrade = check.innerText;
        //validateGradeInput();
      });
    });
  } //listaaaa


  termObjGradeCancel.addEventListener('click', function () {
    termObjGradeCTA.classList.remove("primaryBtn--disabled");
    document.getElementById("termObjGrade").querySelector(".coursecard__bottomStateAlert").classList.remove("coursecard__bottomStateAlert--visible");
    document.getElementById("termObjGrade").querySelector(".coursecard__bottomState").classList.add("coursecard__bottomState--visible");
    termObjGradeSections[1].classList.remove("coursecard__section--visible");
    termObjGradeStates[0].classList.add("coursecard__bottomStateCard--visible");
    termObjGradeCancel.classList.remove("coursecard__bottomBtn--visible");
  }); //listaaaa

  termObjGradeSeeMore.addEventListener('click', function () {
    if (!termObjGradeSections[1].classList.contains("coursecard__section--visible")) {
      termObjGradeSections[1].classList.add("coursecard__section--visible");
      termObjGradeSeeMore.classList.add("seeMoreBtn--opened");
      termObjGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver menos";
    } else {
      termObjGradeSections[1].classList.remove("coursecard__section--visible");
      termObjGradeSeeMore.classList.remove("seeMoreBtn--opened");
      termObjGradeSeeMore.getElementsByTagName("p")[0].innerText = "Ver m??s";
    }
  }); //listaaaa

  function settermObjGrade() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").set({
      termObjGraded: true,
      termObj1: termObjtGrades[0],
      termObj2: termObjtGrades[1],
      termObj3: termObjtGrades[2],
      termObj4: termObjtGrades[3],
      termObj5: termObjtGrades[4]
    }, {
      merge: true
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
    termObjGraded = true;
  } //----------------------teacher sends report---------------


  var reportGraphics = document.querySelectorAll(".reportGraphic");
  var reportUnit3Comment = document.getElementById("reportUnit3Comment");
  var reportUnit3CommentDiv = document.getElementById("reportUnit3CommentDiv");
  setGradeToReportGraphic();

  function setGradeToReportGraphic() {
    reportGraphics.forEach(function (graphic) {
      graphic.classList.remove("reportGraphic--visible");
    });
    console.log(parseInt(unitGrade)); //que se muestre solo la gr??fica en la posici??n del valor de la calificaci??n

    reportGraphics[parseInt(unitGrade)].classList.add("reportGraphic--visible");
    db.collection("courses").doc("course1").collection("units").doc("unit3").get().then(function (doc) {
      //.log(doc);
      if (doc.exists && doc.data().teacherCalificated) {
        reportUnit3Comment.innerText = doc.data().teacherComment;
        reportUnit3CommentDiv.classList.add("reportGraphic__comment--visible");
      } else {// doc.data() will be undefined in this case
        //console.log("No such document!");
      }
    });
  }

  var reportCTABtn = document.getElementById("report").querySelector(".primaryBtn");
  var reportReflectionInput = document.getElementById("reportReflectionInput");
  var reportReflectionText = document.getElementById("reportReflectionText");
  var reportAlert = document.getElementById("reportAlert");
  var reportStates = document.getElementById("report").querySelectorAll(".coursecard__bottomStateCard");
  console.log(reportStates[1]);

  function validateReportSend() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").get().then(function (doc) {
      //.log(doc);
      if (doc.exists && doc.data().termObjGraded && doc.data().teacherCalificated) {
        reportCTABtn.classList.remove("primaryBtn--disabled");
      } else {// doc.data() will be undefined in this case
        //console.log("No such document!");
      }
    });
  }

  reportCTABtn.addEventListener('click', function () {
    if (reportCTABtn.classList.contains("primaryBtn--disabled")) {
      document.getElementById("reportAlert").classList.add("coursecard__bottomStateAlert--visible"); //aqu?? poner mensaje de alertaaaaaa
    } else {
      //poner aqu?? el estado ya calificado
      reportCTABtn.classList.remove("primaryBtn--disabled", "coursecard__bottomBtn--visible");
      reportStates[0].classList.remove("coursecard__bottomStateCard--visible");
      reportStates[1].classList.add("coursecard__bottomStateCard--visible");
      reportReflectionText.innerText = reportReflectionInput.value;
      reportReflectionText.classList.remove("hidden");
      reportReflectionInput.classList.add("hidden");
      console.log(reportReflectionInput.value);
      setResport();
    }
  });

  function setResport() {
    db.collection("courses").doc("course1").collection("units").doc("unit3").set({
      reportSent: true,
      reportReflection: reportReflectionInput.value
    }, {
      merge: true
    }).then(function () {
      console.log("Document successfully written!");
    }).catch(function (error) {
      console.error("Error writing document: ", error);
    });
  }
}); //-------------- code that I can't delete, just in case -------------

/*



    

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

*/
},{"../classes/ExpandMenu":"scripts/classes/ExpandMenu.js","../classes/ChangeTabs":"../scripts/classes/ChangeTabs.js"}],"C:/Users/karen/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57338" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/karen/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/teacherCourses/course1.js"], null)
//# sourceMappingURL=/course1.85d248f0.js.map