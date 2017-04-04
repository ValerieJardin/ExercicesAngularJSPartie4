var app = angular.module('showHideApp',[]);
        app.controller('showHideController', function($scope){
       $scope.show1Me = function(){
         $scope.show=true;
         $scope.hide=false;
       }
       $scope.show2Me = function(){
         $scope.show=true;
         $scope.hide=false;
       }
   });