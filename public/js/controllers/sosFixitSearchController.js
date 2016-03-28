sosFixit.controller("searchController", ['skillsResourceFactory', function(skillsResourceFactory){

  var self = this;

  self.users = [];
  self.searchParam = '';
  self.skills =[];

  (self.getSkillsList = function() {
    skillsResourceFactory.getSkillsList()
      .then(function(json) {//
      for (var i = 0; i < json.data.length; i ++){
        self.skills.push(json.data[i].skill);
      }
    });
  });

  self.saveSkills = function(skill){
    self.searchParam = skill.id;
    self.users = [];
  };

  (self.getUsersSkills = function() {
    skillsResourceFactory.getUserList(self.searchParam)
      .then(function(response) {
        self.loaded = false;
        var userSkillLength = response.data.skill.users.length;
        var allSkillUsers = response.data.skill.users;
        for (var i = 0; i < userSkillLength; i++){
          self.users.push(allSkillUsers[i].user.email);
        }
        self.loaded = true;
      });
  });

}]);
