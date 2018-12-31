var myApp = angular.module("myModule",[]); // creating module

var myController = function($scope) { // creating controller
	var employees = [
		{
			name:"Avinash",
			dateOfBirth:new Date("November 06, 1993"),
			gender:1,
			city:"Bangalore",
			salary:23551
		},
		{
			name:"Prabhakar",
			dateOfBirth:new Date("January 12, 1958"),
			gender:1,
			city:"Sagar",
			salary:40328
		},
		{
			name:"Ashutosh",
			dateOfBirth:new Date("August 03, 1989"),
			gender:1,
			city:"Carbondale",
			salary:105570
		},
		{
			name:"Meena",
			dateOfBirth:new Date("February 16, 1962"),
			gender:2,
			city:"Sagar",
			salary:46900
		},
		{
			name:"Gaurav",
			dateOfBirth:new Date("June 06, 1994"),
			gender:1,
			city:"Tumkur",
			salary:24378
		}
	];
	$scope.employees = employees;
	$scope.rowLimit = 5;
	$scope.startIndex = 0;
	$scope.sortingColumn = function(column){
		if(column=="name") {
			$scope.sortColumn="name";
		} else if(column=="dateOfBirth") {
			$scope.sortColumn="dateOfBirth";
		}else if(column=="city"){
			$scope.sortColumn="city"
		} else if(column=="salary") {
			$scope.sortColumn="-salary";
		}
	}
}

myApp.controller("myController",myController); // registering controller to module
myApp.filter("myFilter",function(){
	return function(gender) {
		switch(gender) {
			case 1:return "Male";
			case 2:return "Female";
			case 3:return "Not Disclosed";
		}
	}
}); // registering filter to module