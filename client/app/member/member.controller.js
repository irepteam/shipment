'use strict';
 
angular.module('exampleApp')
  .controller('MemberCtrl', function ($scope, $http) {
    $scope.members = [];
 
    $http.get('/api/members').success(function(members) {
      $scope.members = members;
    });
  });