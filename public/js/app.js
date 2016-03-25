var sosFixit =

          angular
            .module('SosFixit', [
                'ngResource',
                'ng-token-auth',
                // 'ngCookies',
                // 'ngAnimate',
                'ngRoute',
                // 'ngSanitize',
                // 'ngTouch',
                // 'ipCookie'
                'ipCookie',
                'uiGmapgoogle-maps',
                'ngGeolocation'
            ])
            .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
              $routeProvider
                .when('/', {
                  templateUrl: 'views/main.html',
                  // controller: 'MainCtrl'
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
                .when('/skills_search', {
                  templateUrl: 'views/skills_search.html',
                  controllers: 'sosFixitSearchController'
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
                  libraries: 'places'
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
                $rootScope.userName = localStorage.setItem('username', true);
            });


  }]);
