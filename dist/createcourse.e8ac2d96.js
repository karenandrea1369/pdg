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
var ExpandMenu = /*#__PURE__*/function () {
  function ExpandMenu(toggleId, navBarId) {
    _classCallCheck(this, ExpandMenu);

    this.toggle = document.getElementById(toggleId);
    this.navBar = document.getElementById(navBarId);
  }

  _createClass(ExpandMenu, [{
    key: "expand",
    value: function expand() {
      var _this = this;

      if (this.toggle && this.navBar) {
        //console.log(this.toggle);
        //console.log(this.navBar);
        this.toggle.addEventListener('click', function () {
          _this.navBar.classList.toggle('expand');
        });
      }
    }
  }]);

  return ExpandMenu;
}();

var _default = ExpandMenu;
exports.default = _default;
},{}],"scripts/classes/ReadPdf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReadPdf = /*#__PURE__*/function () {
  function ReadPdf(fields, input) {
    _classCallCheck(this, ReadPdf);

    this.fields = fields;
    this.input = input;
    this.pdftext = "";
    PDFJS.workerSrc = '';
  } //--------------------------- READ PDF ------------------------------


  _createClass(ReadPdf, [{
    key: "extractText",
    value: function extractText() {
      var readPdf = new ReadPdf(this.fields, this.input);
      var fReader = new FileReader();
      fReader.readAsDataURL(this.input.files[0]); // console.log(input.files[0]);

      fReader.onloadend = function (event) {
        readPdf.convertDataURIToBinary(event.target.result, readPdf);
      };
    }
  }, {
    key: "convertDataURIToBinary",
    value: function convertDataURIToBinary(dataURI, readPdf) {
      var BASE64_MARKER = ';base64,';
      var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
      var base64 = dataURI.substring(base64Index);
      var raw = window.atob(base64);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));

      for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }

      readPdf.pdfAsArray(array, readPdf);
    }
  }, {
    key: "getPageText",
    value: function getPageText(pageNum, PDFDocumentInstance) {
      // Return a Promise that is solved once the text of the page is retrieven
      return new Promise(function (resolve, reject) {
        PDFDocumentInstance.getPage(pageNum).then(function (pdfPage) {
          // The main trick to obtain the text of the PDF page, use the getTextContent method
          pdfPage.getTextContent().then(function (textContent) {
            var textItems = textContent.items;
            var finalString = ""; // Concatenate the string of the item to the final string

            for (var i = 0; i < textItems.length; i++) {
              var item = textItems[i];
              finalString += item.str + "";
            } // Solve promise with the text retrieven from the page


            resolve(finalString);
          });
        });
      });
    }
  }, {
    key: "pdfAsArray",
    value: function pdfAsArray(_pdfAsArray, readPdf) {
      PDFJS.getDocument(_pdfAsArray).then(function (pdf) {
        var pdfDocument = pdf; // Create an array that will contain our promises

        var pagesPromises = [];

        for (var i = 0; i < pdf.pdfInfo.numPages; i++) {
          // Required to prevent that i is always the total of pages
          (function (pageNumber) {
            // Store the promise of getPageText that returns the text of a page
            pagesPromises.push(readPdf.getPageText(pageNumber, pdfDocument));
          })(i + 1);
        } // Execute all the promises


        Promise.all(pagesPromises).then(function (pagesText) {
          // Display text of all the pages in the console
          // e.g ["Text content page 1", "Text content page 2", "Text content page 3" ... ]
          // representing every single page of PDF Document by array indexing
          for (var pageNum = 0; pageNum < pagesText.length; pageNum++) {
            //var div = document.getElementById('output');
            //div.innerHTML += (outputStr + pagesText[pageNum]);
            readPdf.pdftext = readPdf.pdftext.concat(pagesText[pageNum]);
          }

          ;
          readPdf.addLineBreak(readPdf);
          readPdf.findFields(readPdf.pdftext, readPdf);
        });
      }, function (reason) {
        // PDF loading error
        console.error(reason);
      });
    } //--------------------------- SEPARATE PDF ------------------------------

  }, {
    key: "addLineBreak",
    value: function addLineBreak(readPdf) {
      var regexp = / [0-9]\./g;
      var originText = readPdf.pdftext.split('');

      var results = _toConsumableArray(readPdf.pdftext.matchAll(regexp));

      for (var i = 0; i < results.length; i++) {
        originText.splice(results[i].index + i, 0, "<br>");
      }

      readPdf.pdftext = originText.join('');
    }
  }, {
    key: "findFields",
    value: function findFields(text, readPdf) {
      //if found the field, save the begin and end position of it in the string
      readPdf.fields.forEach(function (field) {
        if (text.search(field.field) != -1) {
          field.exist = true;
          field.start = text.search(field.field);
          field.end = text.search(field.field) + field.field.length;
        }
      }); //sort fields in order of start

      readPdf.fields.sort(readPdf.sortFields);
      readPdf.putFieldsContent(readPdf.fields, text);
    }
  }, {
    key: "sortFields",
    value: function sortFields(a, b) {
      return a.start - b.start;
    }
  }, {
    key: "putFieldsContent",
    value: function putFieldsContent(array, originText) {
      array.forEach(function (obj, index) {
        if (obj.end != 0) {
          //to all fields that exist
          if (index + 1 < array.length) {
            var content = originText.substring(obj.end, array[index + 1].start).trim();
            obj.content = content; //console.log(obj.field, obj.content);
          } else {
            var content = originText.substring(obj.end);
            obj.content = content; //console.log(obj.field, obj.content);
          }
        }
      });
    }
  }]);

  return ReadPdf;
}();

var _default = ReadPdf;
exports.default = _default;
},{}],"scripts/pages/createcourse.js":[function(require,module,exports) {
"use strict";

var _ExpandMenu = _interopRequireDefault(require("../classes/ExpandMenu"));

var _ReadPdf = _interopRequireDefault(require("../classes/ReadPdf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var auth = firebase.auth();
  var db = firebase.firestore();
  var expander = new _ExpandMenu.default('nav-toggle', 'navBar');
  expander.expand();
  var input = document.getElementById("file-id"); //--------------------------- SYLLABUS FIELDS ------------------------------

  var fields = [{
    "field": "Parte 1:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Código-Curso:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Tiene como prerrequisito:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Programa-Semestre:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Intensidad semanal:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Créditos:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Objetivo General:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Parte 2:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Objetivos terminales",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Parte 3: Objetivos Específicos",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Unidad 1:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Unidad 2:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Unidad 3:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Unidad 4:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Unidad 5:",
    "exist": false,
    "start": 0,
    "end": 0,
    "content": ""
  }, {
    "field": "Unidad 6:",
    "exist": false,
    "start": "",
    "end": 0,
    "content": ""
  }]; //--------------------------- READ PDF ------------------------------

  input.addEventListener('change', function () {
    fields.forEach(function (field) {
      field.exist = false;
      field.start = 0;
      field.end = 0;
      field.content = "";
    });
    var readPdf = new _ReadPdf.default(fields, input);
    readPdf.extractText();
  });
});
},{"../classes/ExpandMenu":"scripts/classes/ExpandMenu.js","../classes/ReadPdf":"scripts/classes/ReadPdf.js"}],"C:/Users/karen/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50105" + '/');

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
},{}]},{},["C:/Users/karen/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/pages/createcourse.js"], null)
//# sourceMappingURL=/createcourse.e8ac2d96.js.map