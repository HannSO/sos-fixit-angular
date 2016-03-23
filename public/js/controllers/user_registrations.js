// angular.module('SosFixit')
//   .controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
//     $scope.$on('auth:registration-email-error', function(event, reason) {
//       $scope.error = "failed registration";
//       // reason.errors[0];
//     });
//     $scope.handleRegBtnClick = function() {
//       $auth.submitRegistration($scope.registrationForm)
//         .then(function() {
//           $auth.submitLogin({
//             email: $scope.registrationForm.email,
//             password: $scope.registrationForm.password
//           });
//         });
//     };
//   }]);

  angular.module('SosFixit')
  .controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
    };
  }]);
