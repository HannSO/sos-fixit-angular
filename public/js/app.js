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
          .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutCtrl'
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

      .run(['$rootScope', '$location', function($rootScope, $location, $cookies) {
        $rootScope.$on('auth:login-success', function(){
          $location.path('/');
          // alert('Welcome, you have successfully logged in');
        });
        $rootScope.$on('auth:login-error', function(event, reason){
          alert(reason.errors[0]);
        });
        $rootScope.$on('auth:logout-success', function(ev) {
          alert('You have successfully logged out, goodbye');
        });


      }]);
