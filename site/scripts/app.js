var app = angular.module('iHouseApp', ['ngMessages', 'ngAnimate']);

app.controller('contactCtrl', ['$scope', function($scope){
	
	$scope.header = 'Skontaktuj się z agentem';

	$scope.user = {
		message: 'Dzień dobry, Jestem zainteresowany współpracą z Panem. \nProszę o kontakt.'
	};

	$scope.submit = function() {
		$scope.submitSuccess = true;
		$scope.header = 'Wiadomość wysłana z sukcesem!';
	};	

}]);

app.directive('contactForm', function() {
	return {
		restrict: 'E',
		replace: false,
		templateUrl: 'templates/contactForm.html'
	};
});
