angular.module('app')
    .controller('HomeCtrl',function($scope){
        $scope.message='this is home';
		$scope.title = $scope.message;
});
