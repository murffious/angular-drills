angular.module('app10').directive('dir10', function () {
    return {
        scope: {
            img: "@"

        },
        templateUrl: 'dir.html'
    }
})