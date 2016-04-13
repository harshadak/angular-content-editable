var app = angular.module('myApp', []);

app.directive('makeEditable', function () {
    return {
        restrict: 'E',
        templateUrl: 'editable.html',
        scope: true,
        transclude: true,
        link: function (scope, element, attrs) {
            scope.editStatus = false;
            scope.buttonTitle = 'Edit';
            scope.toggleClick = function () {
                if (scope.editStatus == false) {
                    scope.editStatus = true;
                    scope.buttonTitle = 'Save';
                } else {
                    scope.editStatus = false;
                    scope.buttonTitle = 'Edit';
                }
            };
        }
    }
});
