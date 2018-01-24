var app = angular.module('myApp',['angularjs-dropdown-multiselect']);
app.controller('myCtrl', function($scope) {
    $scope.example10model = []; 
    $scope.example10data = [ {id: 1, label: "David"}, 
                             {id: 2, label: "Jhon"}, 
                             {id: 3, label: "Danny"}]; 
    $scope.example10settings = {selectionLimit: 2};
})