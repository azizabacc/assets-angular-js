app.directive('selectPickers',['$compile', function ($compile) {
    return {
        restrict: "E",
        templateUrl: "select1.html",
        scope: {
            config: '='
        },
        link: function (scope, element, attrs) {
            var paragraph = angular.element('<p ng-bind="config.title"></p>');
            $compile(paragraph)(scope);
            element.prepend(paragraph);
        },
        controller: function ($scope) {
            $scope.defaultTime = $scope.config.defaultTime || 0;

            $scope.timesChanged = function () {
                console.log('time changed : ', $scope.config.defaultTime);
                if ($scope.config.onTimeChange) {
                    $scope.config.onTimeChange();
                }
            };
        }
    };
}]);