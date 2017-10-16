import { Simcity,Building } from './../js/simcity.js';

$(document).ready(function() {
  // $('#bear-form').submit(function(event) {
  //   event.preventDefault();
  // });
  let city = new Simcity();
  for(let i = 0; i < city.grid.length ; ++i){
    $('#map1').append("<img src='img/grass.jpg' class='block" + i + "' class='block' >")
  }
  let theBlock;
  $('.block').click(function(e) {
    theBlock = links[$(e.currentTarget).children().attr('id')];
  });

  console.log(theBlock)

  // $( "#block" ).click(function() {
  //
  // }
  // $( "#farm" ).click(function() {
  //
  // }
  // $( "#business" ).click(function() {
  //
  // }
  // $( "#house" ).click(function() {
  //
  // }
  // $( "#hotel" ).click(function() {
  //
  // }
  // $( "#opera" ).click(function() {
  //
  // }

  setInterval(function(){
  });
});
