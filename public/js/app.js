var sosFixit =

          angular
            .module('SosFixit', [
                'ngResource',
                'ng-token-auth',
                'ngCookies',
                // 'ngAnimate',
                'ngRoute'
                // 'ngSanitize',
                // 'ngTouch',
                // 'ipCookie'
            ])
            .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
              }])

            // .config(['$authProvider', function($authProvider){
            // 		$authProvider.configure({
            // 			apiUrl: 'http://localhost:3000'
            // 		});
            // 	}])

            .run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies) {
              $rootScope.$on('auth:login-success', function(){
                $location.path('/');
                console.log('hi');
                // $cookies.put('username', 'logged in');
                // var username = $cookies.get('username');
                // console.log(username);
                // $rootScope.userName = username;
               $rootScope.userName = localStorage.setItem('username', true);
            });


  }]);
