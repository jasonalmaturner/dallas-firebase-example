angular.module('firebaseExample').service('mainService', function($http) {

  this.getList = function() {
    return new Firebase('https://torid-fire-9494.firebaseio.com/text');
  }

  this.getItem = function(id) {
    return new Firebase('https://torid-fire-9494.firebaseio.com/text/' + '-K2wVmWLnSRbwnjod1g1')
  }
});
