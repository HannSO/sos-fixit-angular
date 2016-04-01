var sosFixit =

    angular
      .module('SosFixit', [
          'ngResource',
          'ng-token-auth',
          // 'ngCookies',
          // 'ngAnimate',
          'ngRoute',
          'ipCookie',
          'uiGmapgoogle-maps',
          'ngGeolocation'
      ])
      .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controllers: 'searchController'
          })
          .when('/sign_in', {
            templateUrl: 'views/user_sessions/new.html',
            controllers: 'UserSessionsCtrl'
          })
          .when('/register', {
            templateUrl: 'views/user_registrations/new.html',
            controllers: 'UserRegistrationsCtrl',
            controllerAs: 'userRegistrationsCtrl'
          })
          .when('/search_skills', {
            templateUrl: 'views/user_skills_list/search_skills.html',
            controllers: 'searchController'
          })
          .when('/search_results', {
            templateUrl: 'views/user_skills_list/search_results.html',
            controllers: 'listController'
          })
          .when('/add_skills',{
            templateUrl: 'views/add_user_skills.html',
            controllers: 'userSkillsController'
          })
          .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutCtrl'
          })
          .when('/inbox', {
            templateUrl: 'views/mailbox/inbox.html',
            controller: 'mailboxController',
          })

          .when('/send-message',{
            templateUrl: 'views/sending_messages/send_messages.html',
            controller: 'sendingMessagesController'
            // controllerAs: 'SendCtrl'
          })
          .when('/message-reply',{
            templateUrl: 'views/sending_messages/reply_messages.html',
            controller: 'replyingMessagesController'
            // controllerAs: 'SendCtrl'
          })

          .when('/user_profile', {
            templateUrl: 'views/user_profile/user_profile.html',
            controller: 'userProfileController'

          })

          .otherwise({
            redirectTo: '/'
          });

          uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyA6Fpwt9hF237J82XzJC73kjinH2jYZ6pU',
            v: '3.22',
            libraries: 'places,geometry'
          });
        }])

      // .config(['$authProvider', function($authProvider){
      // 		$authProvider.configure({
      // 			apiUrl: 'http://localhost:3000'
      // 		});
      // 	}])

      .run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.$on('auth:login-success', function(){
          $location.path('/');
          // $scope.message = ('Welcome, you have successfully logged in');
        });
      //   $rootScope.$on('auth:login-error', function(event, reason){
      //     $scope.message = (reason.errors[0]);
      //   });
      //   // $rootScope.$on('auth:logout-success', function($scope, ev) {
      //   //   $scope.message = 'You have successfully logged out, goodbye';
      //   //   $scope.message = '';
      //   });

      }]);

      sosFixit.filter('dateToISO', function() {
        return function(input) {
          input = new Date(input).toISOString();
          return input;
        };
      });
