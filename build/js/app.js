(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Simcity = exports.Simcity = function Simcity() {
  _classCallCheck(this, Simcity);

  this.grid = ["lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd", "lnd"];
  this.food = 0;
  this.money = 0;
  this.population = 0;
};

var Building = exports.Building = function Building(position, type) {
  _classCallCheck(this, Building);

  this.position = position;
  this.type = type;
};

},{}],2:[function(require,module,exports){
'use strict';

var _simcity = require('./../js/simcity.js');

$(document).ready(function () {
  // $('#bear-form').submit(function(event) {
  //   event.preventDefault();
  // });
  var city = new _simcity.Simcity();
  for (var i = 0; i < city.grid.length; ++i) {
    $('#map1').append("<img src='img/grass.jpg' id='block" + city.grid[i] + "'>");
  }

  setInterval(function () {});
});

$(document).ready(function () {
  // build game board template display
  var board = "";
  var x = 0;
  for (var row = 0; row < 10; row++) {
    board += "<div class='row'>";
    for (var col = 0; col < 12; col++) {
      board += '<div class=\'col-sm-1\'><div class=\'sqr\' id=\'' + x + '\'></div></div>';
      x += 1;
    }
    board += "</div>";
  }
  //health bar
  var status = "<div class='row'><div id='healthBar' class='col-sm-6'><h1>Health Bar</h1><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-danger active' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:100%'>100%</div></div></div>";
  //inventory
  status += "<div id='inventory' class='col-sm-6'><h1>Inventory:</h1><p>empty</p></div></div>";

  $("#game").append(board);
  $("#status").append(status);
});

},{"./../js/simcity.js":1}]},{},[2]);
