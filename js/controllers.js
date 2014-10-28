angular.module('MathHammer')
.controller('TableCtrl', ['$scope','localStorageService',function($scope, localStorageService){

  $scope.bs=1;
  $scope.s=1;
  $scope.shots=1;
  $scope.hit=false;
  $scope.wound=false;
  $scope.armor_pen=false;
  $scope.melta=false;
  $scope.Math = Math;
  localStorageService.bind($scope, 'bs',1);
  localStorageService.bind($scope, 's',1);
  localStorageService.bind($scope, 'shots',1);


  $scope.saves = {
    ' 2+':1/6,
    ' 3+':2/6,
    ' 4+':3/6,
    ' 5+':4/6,
    ' 6+':5/6,
    '-':6/6
  };

  $scope.bs_array = [1/6, 2/6, 3/6, 4/6, 5/6, 5/6+(1/6*1/6), 5/6+(1/6*2/6), 5/6+(1/6*3/6), 5/6+(1/6*4/6), 5/6+(1/6*5/6)];
  $scope.ST = [
        [3/6, 2/6, 1/6, 1/6, 0, 0, 0, 0, 0, 0],
        [4/6, 3/6, 2/6, 1/6, 1/6, 0, 0, 0, 0, 0],
        [5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0, 0, 0, 0],
        [5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0, 0, 0],
        [5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0, 0],
        [5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6, 0],
        [5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6, 1/6],
        [5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6, 1/6],
        [5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6, 2/6],
        [5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 5/6, 4/6, 3/6],
    ];
    $scope.melta_array = [1,.9722,.9166,.8333,.7222,.5833,.4166,.2777,.1666,.0833,.0277];
}]);
