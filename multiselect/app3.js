var app = angular.module('myApp',['dropdown-multiselect']);
app.controller('myCtrl', function($scope) {
    $scope.options = [ { 'Id': 1, 'Name': 'Batman' }, { 'Id': 2, 'Name': 'Superman' }, { 'Id': 3, 'Name': 'Hulk' }]; 
    $scope.config = {
        options: $scope.options,
        trackBy: 'Id',
        displayBy: [ 'Name', 'Costume' ],
        divider: ':',
        icon: 'glyphicon glyphicon-heart',
        displayBadge: false,
        height: '200px',
        filter: false,
        multiSelect: true
    };
})