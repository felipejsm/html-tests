var myApp = angular.module( "myApp", [ "isteven-multi-select" ]);
myApp.controller('myCtrl', function($scope) {
    $scope.modernBrowsers = [
        { name: "Opera",                     ticked: false  },
        { name: "Internet Explorer",             ticked: false },
        { name: "Firefox",                ticked: false  },
        { name: "Safari",                            ticked: false },
        { name: "Chrome",                           ticked: false  }
    ];
    $scope.fClick = function(data) {
        console.log(data);
        if(true) {
            //$scope.disableProperty = true;
            $scope.disableDir = true;
        }
    }
    $scope.anoPeriodo =
    [
  {
    "ano": "2004",
    "periodo": "0",
    "anoPeriodo": "2004/0"
  },
  {
    "ano": "2005",
    "periodo": "0",
    "anoPeriodo": "2005/0"
  },
  {
    "ano": "2006",
    "periodo": "0",
    "anoPeriodo": "2006/0"
  },
  {
    "ano": "2014",
    "periodo": "0",
    "anoPeriodo": "2014/0"
  },
  {
    "ano": "2014",
    "periodo": "1",
    "anoPeriodo": "2014/1"
  },
  {
    "ano": "2014",
    "periodo": "2",
    "anoPeriodo": "2014/2"
  },
  {
    "ano": "2015",
    "periodo": "1",
    "anoPeriodo": "2015/1"
  },
  {
    "ano": "2016",
    "periodo": "1",
    "anoPeriodo": "2016/1"
  }
];
});