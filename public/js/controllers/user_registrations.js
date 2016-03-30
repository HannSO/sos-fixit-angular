  angular.module('SosFixit')
  .controller('UserRegistrationsCtrl', ['uiGmapGoogleMapApi', '$location', '$auth', 'registrationLocationFactory', '$scope', function(uiGmapGoogleMapApi, $location, $auth, registrationLocationFactory, $scope) {

    var self = this;
    $scope.$on('auth:registration-email-error', function(event, reason) {
      alert("Registration failed: please check the details you have entered");
    });

    // $scope.$on('auth:registration-email-success', function(event, user) {
    //   alert("Welcome " + user.email +", you have successfully registered");
    // });

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
