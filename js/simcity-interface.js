import { Simcity,Building } from './../js/simcity.js';

$(document).ready(function() {
  // $('#bear-form').submit(function(event) {
  //   event.preventDefault();
  // });
  let city = new Simcity();
  for(let i = 0; i < city.grid.length ; ++i){
    $('#map1').append("<img src='img/grass.jpg' id='block" + city.grid[i] + "'>")
  }

  setInterval(function(){
  });
});
