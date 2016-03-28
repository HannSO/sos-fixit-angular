angular.module('SosFixit')
.controller('addSkillsController', ['skillsResourceFactory', function(skillsResourceFactory) {
var self = this;

self.skill = '';

  (self.getSkillsList = function() {
    skillsResourceFactory.getSkillsList()
      .then(function(json) {//
      for (var i = 0; i < json.data.length; i ++){
        self.skills.push(json.data[i].skill);
      }
    });
  });


  self.submit = function(){
    var skill = self.skill ;
    var currentUser = $rootScope.user.id ;
    var userEditPath = "http://localhost:3000/users/edit/";
    $http.post(userEditPath,{user: currentUser, skill: skill});
  };
}]);
