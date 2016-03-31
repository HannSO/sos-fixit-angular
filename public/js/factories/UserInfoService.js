sosFixit.factory('userInfoService', ['$http', function($http){

  var self = {};

  self.getOneUserInfo = function(userId) {
    return $http.get('http://localhost:3000/users' + userId);
  };

  self.getMessages = function(searchParam) {
    return $http.get('http://localhost:3000/conversations/' + searchParam);
  };

  return self;

}]);
