angular.module("app3").controller('mainCtrl', function($scope, mainService){

$scope.persons = mainService.getData()

})