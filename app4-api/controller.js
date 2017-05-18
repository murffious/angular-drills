angular.module('app4').controller('mainCtrl', function ($scope, mainService) {

$scope.getData = function () {
    mainService.getData().then(function (response){
  $scope.planets = response.data.results 
})
}
$scope.getData()
})