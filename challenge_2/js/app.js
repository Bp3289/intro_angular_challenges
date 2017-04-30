console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  
  this.full_name = "Billy";
  this.age = "28";
  this.city = "Edna";
  this.state = "Texas";
  this.shout = function(input){
  			var out = input.toUpperCase() + "!";
  			return out;
  };
}
