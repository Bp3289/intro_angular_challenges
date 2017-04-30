console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);
app.controller("loanController", loanController);

function infoController(){
  this.name = "Billy"; // default name
  this.height = 5.9; // default height in feet
}

function loanController () {
	this.amount = 1000;
	this.apr = 9;

	this.month = function(n) {
		var year = this.amount * (this.apr /100);
		var month = (year / 12);
		var round = Math.round(month * 100) / 100;

		var interest = n * round;
		return {
			accured_interest: interest,
			total_balance: this.amount + interest
		};

};
}
