sosFixit.controller("SearchController", ['$http', function($http){
  var self = this;
  self.users = [];
  self.searchParam = '';
  self.skills =[];

  self.getSkillsList = function() {
    $http.get('http://localhost:3000/skills').success(function(json){
      self.skills = json;
    }
  );
};

  self.saveSkills = function(skill){
    self.searchParam = skill.skill.id;
  };

  self.getUsersSkills = function(){
    self.loaded = false;
    $http.get('http://localhost:3000/skills/' + self.searchParam + '/users')

    .success(function(json){
      self.users = json;
      self.loaded = true;
    });
  };
}]);
