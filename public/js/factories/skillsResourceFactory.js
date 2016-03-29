sosFixit.factory('skillsResourceFactory', ['$http', function($http){
  var self = {};

  self.getSkillsList = function() {
    return $http.get('http://localhost:3000/skills');
  };

  self.getUserList = function(searchParam) {
    return $http.get('http://localhost:3000/skills/' + searchParam);
  };

  return self;
}]);
