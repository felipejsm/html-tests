var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope) {
    var myElement = angular.element( document.querySelector( '.ui.dropdown' ) );
    $scope.elem = ['angular','css','design','ember','html','javascript'];
    $('.ui.dropdown').dropdown();
    /* $('.ui.dropdown')
      .dropdown(); */
})