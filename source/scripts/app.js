var app = angular.module('iHouseApp', ['ngMessages', 'ngAnimate']);

app.controller('contactCtrl', ['$scope', function($scope){
	
	$scope.header = 'Skontaktuj się z agentem';

	$scope.user = {
		message: 'Dzień dobry, Jestem zainteresowany współpracą z Panem. \nProszę o kontakt.'
	};

	$scope.submit = function() {
		$scope.submitSuccess = true;
		$scope.header = 'Wiadomość wysłana z sukcesem!';
		angular.element(document.querySelector('.phoneBox')).css('top', '420px');
	};	

	$scope.hideAdm = true;
	$scope.hideOption = 'czytaj więcej';
	$scope.hideInfo = function(){
		$scope.hideAdm = !$scope.hideAdm;
		if($scope.hideAdm) {
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