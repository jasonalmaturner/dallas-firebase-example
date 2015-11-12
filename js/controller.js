angular.module('firebaseExample').controller('mainCtrl', function($scope, $firebaseObject, mainService, $firebaseArray) {
  $scope.list = $firebaseArray(mainService.getList());
  $scope.item = $firebaseObject(mainService.getItem());
  console.log($scope.item);
  console.log($scope.list);

  $scope.addItem = function() {
    $scope.list.$add({text: $scope.newItem}).then(function() {
      $scope.newItem = '';
    });
  };
});
