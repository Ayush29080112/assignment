(function(){
  'use strict';

  angular.module("LunchCheck",[])
  .controller("LunchCheckController",lunchCheckController);

  lunchCheckController.$inject=['$scope'];

  function lunchCheckController($scope){
      $scope.lunch="";
      $scope.message="";
      $scope.checkLunch=function(){
        $scope.message="";
          if($scope.lunch==""){
            $scope.message="Please enter data first"
            return;
          }
          var splitted=$scope.lunch.split(',');
          console.log(splitted)
          if(splitted.length<=3){
              $scope.message="Enjoy!";
          }else{
            $scope.message="Too much!";
          }
      };
  }
})()
