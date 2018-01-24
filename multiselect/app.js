var app = angular.module('myApp', ['btorfs.multiselect']);
app.controller('myCtrl', function($scope) {
    $scope.options = [
        "France",
        "United Kingdom",
        "Germany",
        "Belgium",
        "Netherlands",
        "Spain",
        "Italy",
        "Poland",
        "Austria"
    ]
})