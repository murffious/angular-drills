angular.module('app4').service('mainService', function($http){

    this.getData = function (){
        return $http.get('https://swapi.co/api/planets/')
    }

})