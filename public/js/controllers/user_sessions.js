angular.module('SosFixit')
  .controller('UserSessionsCtrl', ['$scope', function($scope){
    $scope.$on('auth:login-error', function(ev, reason){
      $scope.error= reason.errors[0];
    });
    $scope.login = true;

  }]);
