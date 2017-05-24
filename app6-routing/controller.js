angular.module('routing')
.controller("mainCtrl", function ($scope, mainService){

 $scope.recMarvel = function () {
     mainService.getMarvelPeeps().then(function(response){
         $scope.Marvel = response.data.results
         console.log($scope.Marvel)
     })
 }
 $scope.recMarvel()
})