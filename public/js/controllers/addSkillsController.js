angular.module('SosFixit')
.controller('addSkillsController', ['skillsResourceFactory', '$rootScope', '$http', function(skillsResourceFactory, $rootScope, $http) {
var self = this;

self.addedSkills = [];
self.skills =[];

  (self.getSkillsList = function() {
    skillsResourceFactory.getSkillsList()
      .then(function(json) {//
      for (var i = 0; i < json.data.length; i ++){
        self.skills.push(json.data[i].skill);
      }

    });
  });

  self.addSkills = function(skill){
    if (!skill.added){
      var index = self.addedSkills.indexOf(skill.id);
      self.addedSkills.splice(index, 1);
    } else {
      self.addedSkills.push(skill.id);
    }
  };

  self.submit = function(){
    console.log(self.addedSkills);
    var skill = "potato" ;
    var currentUser = $rootScope.user.id ;
    var userEditPath = "http://localhost:3000/users/" + currentUser;
    var path = $http.patch(userEditPath,{user: currentUser, skills: skill});
    console.log(path);
  };
}]);
