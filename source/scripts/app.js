var app = angular.module('iHouseApp', ['ngMessages']);

app.controller('contactCtrl', ['$scope', function($scope){
	
	$scope.user = {
		message: 'Dzień dobry, Jestem zainteresowany współpracą z Panem. \nProszę o kontakt.'
	};

	$scope.submit = function() {
		alert($scope.user.message);
	};	

	$scope.hide = true;
	$scope.hideOption = 'czytaj więcej';
	$scope.hideInfo = function(){
		$scope.hide = !$scope.hide;
		if($scope.hide) {
			$scope.hideOption = 'czytaj więcej';
		} else {
			$scope.hideOption = 'zwiń';
		}
	};	

	$scope.hideNr = true;
}]);

app.directive('contactForm', function() {
	return {
		restrict: 'E',
		replace: false,
		templateUrl: 'templates/contactForm.html'
	};
});