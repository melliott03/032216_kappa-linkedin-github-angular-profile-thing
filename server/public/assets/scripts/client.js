var myApp = angular.module('myApp',[]);

myApp.controller('MainController',['$scope', '$http', function($scope, $http){
    $scope.test = "this is a test of the emergency Angular system! This is only a test.";

    $scope.kappenArray = {};

    $scope.getData = function(){
      $http.get("/kappens").then(function(response){
        $scope.kappenArray = response.data.students;
        
        console.log('$scope.kappenArray', $scope.kappenArray);
      });

    };

    $scope.getData();
}]);
