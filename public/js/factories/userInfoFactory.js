sosFixit.factory('userInfoFactory', ['$http', function($http){

  var self = {};

  self.getOneUserInfo = function(userId) {
    return $http.get('http://localhost:3000/users' + userId);
  };


  return self;

}]);
