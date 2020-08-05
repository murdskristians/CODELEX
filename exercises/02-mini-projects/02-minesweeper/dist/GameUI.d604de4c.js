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
})({"../src/Minesweeper.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Minesweeper = exports.Cell = void 0;

var Cell =
/** @class */
function () {
  function Cell() {
    this.isOpen = false;
    this.mines = 0;
    this.isBomb = false;
    this.isFlag = false;
    this.isUnsure = false;
  }

  return Cell;
}();

exports.Cell = Cell;

var Minesweeper =
/** @class */
function () {
  function Minesweeper(level) {
    this.level = level;
  }

  Minesweeper.prototype.columnsCount = function () {
    return 10;
  };

  Minesweeper.prototype.getCells = function () {
    if (this.level.title === "Beginner") return Array(10).fill(Array(10).fill(new Cell()));
    if (this.level.title === "Intermediate") return Array(25).fill(Array(25).fill(new Cell()));else return Array(100).fill(Array(100).fill(new Cell()));
  };

  Minesweeper.prototype.onLeftMouseDown = function (x, y) {};

  Minesweeper.prototype.onLeftMouseUp = function (x, y) {};

  Minesweeper.prototype.onRightMouseUp = function (x, y) {};

  Minesweeper.prototype.isTense = function () {
    return true;
  };

  Minesweeper.prototype.timePassed = function () {
    return 999;
  };

  Minesweeper.prototype.minesLeftCount = function () {
    return 999;
  };

  Minesweeper.prototype.reset = function () {};

  Minesweeper.prototype.currentLevel = function () {
    return this.level;
  };

  Minesweeper.prototype.selectLevel = function (level) {};

  Minesweeper.prototype.isLost = function () {
    return false;
  };

  Minesweeper.prototype.isWon = function () {
    return false;
  };

  Minesweeper.prototype.isQuestionMarksEnabled = function () {
    return false;
  };

  Minesweeper.prototype.toggleQuestionMarksEnabled = function () {};

  return Minesweeper;
}();

exports.Minesweeper = Minesweeper;
},{}],"../src/levels.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEVELS = void 0;
var LEVELS = [{
  title: "Beginner",
  rows: 10,
  columns: 10,
  mines: 10
}, {
  title: "Intermediate",
  rows: 25,
  columns: 25,
  mines: 25
}, {
  title: "Expert",
  rows: 100,
  columns: 100,
  mines: 9999
}];
exports.LEVELS = LEVELS;
},{}],"../src/GameUI.ts":[function(require,module,exports) {
"use strict";

var _Minesweeper = require("./Minesweeper");

var _levels = require("./levels");

var cellWidth = 16;

var cellClassName = function cellClassName(cell) {
  if (cell.isOpen) {
    if (cell.isBomb) {
      return "mine-hit";
    }

    return "mines" + cell.mines;
  }

  if (cell.isFlag) {
    return "flag";
  }

  if (cell.isUnsure) {
    return "question";
  }

  return "covered";
};

var faceClassName = function faceClassName(minesweeper) {
  if (minesweeper.isLost()) {
    return "face-sad";
  }

  if (minesweeper.isWon()) {
    return "face-sunglasses";
  }

  if (minesweeper.isTense()) {
    return "face-surprised";
  }

  return "face-smile";
};

var getHundreds = function getHundreds(n) {
  return Math.floor(n / 100 % 10);
};

var getTens = function getTens(n) {
  return Math.floor(n / 10 % 10);
};

var getOnes = function getOnes(n) {
  return Math.floor(n % 10);
};

var elementById = function elementById(id) {
  return document.getElementById(id);
};

var GameUI =
/** @class */
function () {
  function GameUI() {
    var _this = this;

    this.isMenuOpen = false;
    this.windowWrapperOuter = elementById("window-wrapper-outer");
    this.resetButton = elementById("minesweeper-reset-button");
    this.menuLink = elementById("menu-link");
    this.menu = elementById("menu");
    this.menuNew = elementById("menu-new");
    this.menuBeginner = elementById("menu-beginner");
    this.menuIntermediate = elementById("menu-intermediate");
    this.menuExpert = elementById("menu-expert");
    this.menuMarks = elementById("menu-marks");
    this.minesweeper = new _Minesweeper.Minesweeper(_levels.LEVELS[0]);
    this.windowWrapperOuter.addEventListener("contextmenu", function (e) {
      return e.preventDefault();
    });
    this.resetButton.addEventListener("mousedown", function () {
      return _this.resetButton.className = "face-pressed";
    });
    this.resetButton.addEventListener("mouseup", function () {
      _this.resetButton.className = "face-smile";

      _this.minesweeper.reset();

      _this.draw();
    });
    document.body.addEventListener("click", function () {
      if (_this.isMenuOpen) {
        _this.isMenuOpen = false;

        _this.draw();
      }
    });
    this.menuLink.addEventListener("click", function (e) {
      e.stopPropagation();
      _this.isMenuOpen = !_this.isMenuOpen;

      _this.draw();
    });
    this.menuNew.addEventListener("click", function () {
      _this.minesweeper.reset();

      _this.draw();
    });
    this.menuBeginner.addEventListener("click", function () {
      _this.minesweeper.selectLevel(_levels.LEVELS[0]);

      _this.draw();
    });
    this.menuIntermediate.addEventListener("click", function () {
      _this.minesweeper.selectLevel(_levels.LEVELS[1]);

      _this.draw();
    });
    this.menuExpert.addEventListener("click", function () {
      _this.minesweeper.selectLevel(_levels.LEVELS[2]);

      _this.draw();
    });
    this.menuMarks.addEventListener("click", function () {
      _this.minesweeper.toggleQuestionMarksEnabled();

      _this.draw();
    });
  }

  GameUI.prototype.start = function () {
    var windowWrapperOuter = elementById("window-wrapper-outer");
    windowWrapperOuter.style.width = cellWidth * this.minesweeper.columnsCount() + 27 + "px";
    this.draw();
    elementById("game").style.display = "block";
  };

  GameUI.prototype.draw = function () {
    var _this = this;

    var minefield = elementById("minefield");
    minefield.innerHTML = "";
    this.minesweeper.getCells().forEach(function (row, i) {
      return row.forEach(function (cell, j) {
        return _this.drawCell(minefield, cell, i, j);
      });
    });
    this.drawResetButton();
    this.drawCounters();
    this.drawMenu();
  };

  GameUI.prototype.drawCell = function (minefield, cell, x, y) {
    var _this = this;

    var div = document.createElement("div");
    div.className = cellClassName(cell);
    minefield.appendChild(div);
    div.addEventListener("mouseup", function (e) {
      if (e.which === 3) {
        _this.minesweeper.onRightMouseUp(x, y);
      } else {
        _this.minesweeper.onLeftMouseUp(x, y);
      }

      _this.draw();
    });
    div.addEventListener("mousedown", function (e) {
      if (e.which === 3) {
        e.stopPropagation();
        return;
      }

      _this.minesweeper.onLeftMouseDown(x, y);

      _this.draw();
    });
  };

  GameUI.prototype.drawResetButton = function () {
    this.resetButton.className = faceClassName(this.minesweeper);
  };

  GameUI.prototype.drawCounters = function () {
    var fillCounter = function fillCounter(prefix, count) {
      elementById(prefix + "-hundreds").className = "t" + getHundreds(count);
      elementById(prefix + "-tens").className = "t" + getTens(count);
      elementById(prefix + "-ones").className = "t" + getOnes(count);
    };

    fillCounter("mine-count", this.minesweeper.minesLeftCount());
    fillCounter("timer", this.minesweeper.timePassed());
  };

  GameUI.prototype.drawMenu = function () {
    this.menuLink.className = this.isMenuOpen ? "active" : "";
    this.menu.style.display = this.isMenuOpen ? "block" : "none";
    var currentLevel = this.minesweeper.currentLevel();
    this.menuBeginner.className = currentLevel.title === _levels.LEVELS[0].title ? "checked" : "game-level";
    this.menuIntermediate.className = currentLevel.title === _levels.LEVELS[1].title ? "checked" : "game-level";
    this.menuExpert.className = currentLevel.title === _levels.LEVELS[2].title ? "checked" : "game-level";
    this.menuMarks.className = this.minesweeper.isQuestionMarksEnabled() ? "checked" : "game-level";
  };

  return GameUI;
}();

var game = new GameUI();
game.start();
},{"./Minesweeper":"../src/Minesweeper.ts","./levels":"../src/levels.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59629" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/GameUI.ts"], null)
//# sourceMappingURL=/GameUI.d604de4c.js.map