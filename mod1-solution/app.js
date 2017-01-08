(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MyController);

MyController.$inject = ['$scope'];
function MyController ($scope) {
  $scope.inputText = "";

  $scope.checkLunch = function ($event) {
  	  if ($scope.inputText == "") {
  	  	 $scope.setMessage("Please enter data first","red");
  	  }  	  	
  	  else
  	  {
		  var inputSplit = $scope.inputText.split(",");
		  
		  var n = 0;
		  for (let s of inputSplit) {
		  	n = n + (s.trim()!='')
		  }

		  if (n > 3)
	  	  	$scope.setMessage("Too much!", "green");
	  	  else
  	  	  	$scope.setMessage("Enjoy!", "green");
	  }	
	};
	
	$scope.setMessage = function (msg, col) {
		$scope.message = msg;
		$scope.mstyle = "border: 2px solid " + col + "; color:" + col + "; display:inline-block; padding:5px"
	};

  }

})();
