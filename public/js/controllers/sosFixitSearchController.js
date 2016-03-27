sosFixit.controller("searchController", ['skillsResourceFactory', 'skillsListService', function(skillsResourceFactory, skillsListService){

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
    skillsListService.setData(self.searchParam);
    self.users = [];
  };

}]);
