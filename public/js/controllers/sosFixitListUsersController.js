sosFixit.controller("listController", ['skillsResourceFactory', 'skillsListService', function(skillsResourceFactory, skillsListService){

  var self = this;

  self.users = [];
  self.loaded = false;

  (self.getUsersSkills = function() {
    skillsResourceFactory.getUserList(skillsListService.getData())
      .then(function(response) {
        var userSkillLength = response.data.skill.users.length;
        var allSkillUsers = response.data.skill.users;
        for (var i = 0; i < userSkillLength; i++){
          self.users.push(allSkillUsers[i].user.email);
        }
        self.loaded = true;

    });
  });

}]);
