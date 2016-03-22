sosFixit.controller("searchController", ['$http', function($http){
  var self = this;
  self.users = [];
  self.searchParam = '';
  self.skills =[];

  self.getSkillsList = function() {
    console.log('clicked load');

    $http.get('http://localhost:3000/skills')

    .success(function(json){
      self.skills = json;
      console.log(json);
    }
  );
};

  self.saveSkills = function(skill){
    self.searchParam = skill.skill.id;
  };

  self.getUsersSkills = function(){
    self.loaded = false;
    console.log("easohjdjks");
    $http.get('http://localhost:3000/skills/' + self.searchParam + '/users')

    .success(function(json){
      console.log("successes");
      self.users = json;
      self.loaded = true;
    });
  };
}]);
