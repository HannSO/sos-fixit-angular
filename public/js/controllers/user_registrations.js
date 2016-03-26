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
  .controller('UserRegistrationsCtrl', ['uiGmapGoogleMapApi', '$location', '$auth', 'registrationLocationFactory', function(uiGmapGoogleMapApi, $location, $auth, registrationLocationFactory) {

    var self = this;

    self.locationPicker = new registrationLocationFactory();

    self.handleRegBtnClick = function() {
      self.registrationForm.longitude = self.locationPicker.lng;
      self.registrationForm.latitude = self.locationPicker.lat;
      $auth.submitRegistration(self.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: self.registrationForm.email,
            password: self.registrationForm.password
          });
        });
    };

  }]);
