sosFixit.factory('userInfoResourceFactory', ['$http', function($http){
  var self = {};

  self.getJobsDone = function(userId) {
    return $http.get('http://localhost:3000/user/' + userId + '/jobs/fixer_of');

  };

  self.getJobsReceived = function(userId) {
    return $http.get('http://localhost:3000/user/' + userId + '/jobs/recipient_of');

  };

  self.getSkills = function (userId){
    return $http.get('http://localhost:3000/users/' + userId + '/skills');
  };

  return self;
}]);
