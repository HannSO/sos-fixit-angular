angular.module('SosFixit')
.controller('addSkillsController', ['skillsResourceFactory', 'skillsListService', '$rootScope', '$http', function(skillsResourceFactory, skillsListService, $rootScope, $http) {
var self = this;

self.skill = '';
self.skills = [];
self.users = [];
self.searchParam = '';

  (self.getSkillsList = function() {
    skillsResourceFactory.getSkillsList()
      .then(function(json) {//
        console.log("get skills list");
      for (var i = 0; i < json.data.length; i ++){
        self.skills.push(json.data[i].skill);
      }
    });
  });


  self.saveSkills = function(skill){
    self.searchParam = skill.id;
    skillsListService.setData(self.searchParam);
    self.users = [];
    console.log(self.searchParam);
  };

  self.submit = function(){
    var currentUser = $rootScope.user.id ;
    var userEditPath = "http://localhost:3000/users/" + currentUser;
    $http.patch(userEditPath,{user: currentUser, skill: self.searchParam});
    console.log("post");
  };

}]);
