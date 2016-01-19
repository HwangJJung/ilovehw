(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ilovehw"] = factory();
	else
		root["ilovehw"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ilovehw = {
	  insertionSort: function insertionSort(arr) {
	    //array 인지 아닌지 검사
	    if (Object.prototype.toString.call(arr) !== '[object Array]') {
	      return -1;
	    }
	    // 빈 배열 검사
	    if (arr.length === 0) {
	      return -1;
	    }
	    var L = arr.length;
	    // 배열이 하나일 경우
	    if (L === 1) {
	      return arr;
	    } else {
	      for (var i = 1; i < L; i++) {
	        var temp = arr[i];
	        var j = i - 1;
	        while (j >= 0 && temp <= arr[j]) {
	          arr[j + 1] = arr[j];
	          j--;
	        }
	        arr[j + 1] = temp;
	      }
	      return arr;
	    }
	  }
	};
	exports.default = ilovehw;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ilovehw.js.map