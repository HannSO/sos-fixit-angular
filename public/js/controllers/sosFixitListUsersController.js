sosFixit.controller("listController", ['skillsResourceFactory', 'skillsListService','sendingMessageService', function(skillsResourceFactory, skillsListService, sendingMessageService){

  var self = this;

  self.users = [];
  self.loaded = false;

  (self.getUsersSkills = function() {
    skillsResourceFactory.getUserList(skillsListService.getData())
      .then(function(response) {
        var userSkillLength = response.data.skill.users.length;
        var allSkillUsers = response.data.skill.users;
        for (var i = 0; i < userSkillLength; i++){
          self.users.push(allSkillUsers[i].user);
        }
        self.loaded = true;

    });
  });

  self.saveUserId = function(userId) {
    console.log("ng-click works a bit");
    sendingMessageService.setData(userId);
    console.log(userId);
  };
}]);
