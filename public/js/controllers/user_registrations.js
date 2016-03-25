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


    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    var events = {
      places_changed: function (searchBox) {
        console.log('nope')
        var place = searchBox.getPlaces();
        if (!place || place === 'undefined' || place.length === 0) {
          console.log('no place data :(');
          return;
        }
        $scope.lat = place[0].geometry.location.lat();
        $scope.lng = place[0].geometry.location.lng();
        $scope.map = {
                center:{
                    latitude: place[0].geometry.location.lat(),
                    longitude: place[0].geometry.location.lng()
                },
            zoom:10
        };
      }
    };
    $scope.searchbox = { template:'searchbox.tpl.html', events:events};

    $scope.handleRegBtnClick = function() {
      $scope.registrationForm.longitude = $scope.lng;
      $scope.registrationForm.latitude = $scope.lat;
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
    };

  }]);
