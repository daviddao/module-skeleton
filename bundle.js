(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// That is how we export them
module.exports = {
  algo : algorithm,
  algo2 : algorithm2
};


// Algorithm
function algorithm(input) {
  return input * 2;
}

// Algorithm2
function algorithm2(input) {
  return input * input;
}
},{}],2:[function(require,module,exports){
// local path to the library which is loaded
var library = require("./algorithms");

// That is how we call the algorithms
var res = library.algo(2); // 4
var res2 = library.algo2(3); // 9

// Prints in console
console.log(res); 
},{"./algorithms":1}]},{},[2]);
