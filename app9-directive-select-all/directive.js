angular.module('app9')
.directive('highlightDir', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.on('click', function () {
             element.css('background', 'seagreen')   
            })
        }
    }
})