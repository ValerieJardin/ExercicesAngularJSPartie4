var app = angular.module('showHideApp',[]);
        app.controller('showHideController', function($scope){
       $scope.showMe = function(){
         $scope.show=true;
       }
       $scope.hideMe = function(){
         $scope.show=false;
       }
   });