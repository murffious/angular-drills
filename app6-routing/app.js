angular.module('routing', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/')

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html'
    })
    .state('signUp', {
        url: '/signup',
        templateUrl: 'signUp.html'
    })
    .state('details', {
        url: '/details',
        templateUrl: 'details.html'
    })
})