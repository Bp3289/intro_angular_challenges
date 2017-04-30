console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

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

function ClassController() {

	this.class_name = "WDI3";
	this.enrolled_students = "12";
	this.start_date = "March 13th";
	this.end_date = "June";
	this.daysRemaining = function(){
		var endDate = new Date(2017,06,02);
		var today = new Date();
		var oneDay = (24*60*60*1000);
		var diffDays = Math.round(Math.abs((today.getTime() - endDate.getTime())/(oneDay)));
		return diffDays;
	};

}