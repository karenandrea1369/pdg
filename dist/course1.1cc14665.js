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
},{}],"../scripts/teacherCourses/course1.js":[function(require,module,exports) {
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
      console.log("Cerró sesión exitosamente");
    }).catch(function (error) {
      console.log(error.code);
    });
  }); //----------------------teacher grades unit---------------

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
  checks.forEach(function (check, index) {
    check.addEventListener('click', function () {
      checks.forEach(function (check2) {
        check2.classList.remove("coursecard__rateCheck--checked");
      });
      check.classList.add("coursecard__rateCheck--checked");
      unitGrade = check.innerText;
      console.log("nota", unitGrade);
    });
  });
  var teacherGradeComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment");
  teacherGradeComment.addEventListener('keyup', function () {
    unitComment = document.getElementById("teacherGrade").querySelector(".coursecard__comment").value;
    console.log("comment", unitComment);
  });
  var teacherGradeCTA = document.getElementById("teacherGrade").querySelector(".ctaBtn");
  teacherGradeCTA.addEventListener('click', function () {
    if (!teacherGradeSections[1].classList.contains("coursecard__section--visible")) {
      teacherGradeSections[1].classList.add("coursecard__section--visible"); //aquí poner modo edicioooooooooon
    } else if (unitGrade === "" || unitComment === "") {
      console.log("nel"); //aquí poner mensaje de alertaaaaaa
    } else {
      gradeUnit(); //poner aquí el estado ya calificado

      teacherGradeSections[1].classList.remove("coursecard__section--visible");
      teacherGradeSections[2].classList.add("coursecard__section--visible");
      teacherGradeStates[0].classList.remove("coursecard__bottomStateCard--visible");
      teacherGradeStates[1].classList.add("coursecard__bottomStateCard--visible");
      teacherGradeCTA.classList.remove("coursecard__bottomBtn--visible");
      teacherGradeSeeMore.classList.add("coursecard__bottomBtn--visible");
      unitGradeDiv.innerText = unitGrade;
      unitCommentDiv.innerText = unitComment;
    }
  });

  function gradeUnit() {
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
    ; // console.log("doc from db", doc.data().teacherCalificated);
    // console.log("doc from db", doc.data().teacherCalification);
    // console.log("doc from db", doc.data().teacherComment);
  }
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63690" + '/');

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
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
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
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
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
},{}]},{},["C:/Users/karen/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../scripts/teacherCourses/course1.js"], null)
//# sourceMappingURL=/course1.1cc14665.js.map