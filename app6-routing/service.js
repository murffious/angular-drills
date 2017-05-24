angular.module("routing")
.service("mainService", function ($http){
    
    this.getMarvelPeeps = function () {
    return $http.get("http://gateway.marvel.com/v1/public/comics?apikey=ec366eb9ceeb1732043a41cbc89b4f23")
    }
})

//"https://gateway.marvel.com/v1/public/characters"
//"http://gateway.marvel.com/v1/public/comics"
//"http://swapi.co/api/people/"