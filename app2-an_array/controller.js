angular.module('app2').controller("mainCtrl", function ($scope, mainService){
$scope.employees = mainService.getData()
})