sosFixit.controller("searchController", ['skillsResourceFactory', 'skillsListService', function(skillsResourceFactory, skillsListService){

  var self = this;

  self.users = [];
  self.searchParam = '';
  self.skills =[];
  // self.loaded = false;

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
    skillsListService.setData(self.searchParam);
    self.users = [];
  };

  // (self.getUsersSkills = function() {
  //   skillsResourceFactory.getUserList(self.searchParam)
  //     .then(function(response) {
  //       var userSkillLength = response.data.skill.users.length;
  //       var allSkillUsers = response.data.skill.users;
  //       for (var i = 0; i < userSkillLength; i++){
  //         self.users.push(allSkillUsers[i].user.email);
  //       }
  //       // skillsListService.setData(self.users);
  //       // self.users = skillsListService.getData();
  //       self.loaded = true;
  //
  //   });
  // });
  // });

}]);
