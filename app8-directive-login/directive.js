angular.module('app8').directive('login', function () {
    return {
        template: "<input ng-model='login.username'><input ng-model='login.password'><button ng-click='loginAlert(login)'></button>",
        controller: function ($scope) {
            $scope.loginAlert = function (value) {
                alert(value.username + value.password)
            }
        }
    }
})