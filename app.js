var app = angular.module('myApp', []);

app.controller('myController', function ($scope, $http) {
    // Vérifier si les données sont présentes dans le localStorage
    var storedData = localStorage.getItem('myData');

    if (storedData) {
        // Si les données sont présentes, les utiliser
        $scope.data = JSON.parse(storedData);
        console.log('Data from localStorage')
    } else {
        // Sinon, faire une requête API pour obtenir les données
        $http.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // Assigner les données à $scope
                $scope.data = response.data;
                console.log('Data from api')

                // Stocker les données dans localStorage
                localStorage.setItem('myData', JSON.stringify(response.data));

                // Supprimer les données après une minute
                setTimeout(function () {
                    localStorage.removeItem('myData');
                    console.log('Data removed from localStorage.');
                }, 60000); // 60000 milliseconds = 1 minute
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
            });
    }
});

app.controller('TimePickerController', ['$scope', function (scope) {
    console.log('TimePickerController');
    scope.defaultTime = 0;
    scope.periodLabels = ['aziza', 'zzzzz'];
    scope.timesChanged = function () {
        console.log('time changed : ', scope.defaultTime);

        if (scope.defaultTime == 14) {
            scope.datePicker = true;
        } else {
            console.log(scope.datePicker)
        }
    };
}]);