var app = angular.module('iHouseApp', []);

app.controller('contactCtrl', ['$scope', function($scope){
	
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