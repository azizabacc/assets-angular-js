
app.directive('selectPicker', function () {
    return {
        restrict: "E",
        templateUrl: "select.html",
        scope: {
            periodLabels: '=',
            defaultTime: '=',
            onTimeChange: '&'
        }
        , controller: 'TimePickerController'
    }
});
