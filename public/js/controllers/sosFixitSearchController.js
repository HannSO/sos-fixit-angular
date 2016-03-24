sosFixit.controller("searchController", ['$http', function($http){
  var self = this;
  self.users = [];
  self.searchParam = '';
  self.skills =[];

  self.getSkillsList = function() {
    $http.get('http://localhost:3000/skills')

    .success(function(json){
      self.skills = json;
    }
  );
};

  self.saveSkills = function(skill){
    self.searchParam = skill.skill.id;
  };

  self.getUsersSkills = function(){
    self.loaded = false;
    $http.get('http://localhost:3000/skills/' + self.searchParam)

    .success(function(json){
      self.users =[];

      console.log(json);
      console.log(json.skill.users.length);

      var userSkillLength = json.skill.users.length;
      var allSkillUsers = json.skill.users;

      console.log("dsjldljssplitter");
      for (var i = 0; i < userSkillLength; i++){

      console.log(allSkillUsers[i]);
      self.users.push(allSkillUsers[i].user.email);

        //
        // console.log(obj);
        // console.log(obj.user);
      }

      console.log(self.users);
      self.loaded = true;
    });
  };
}]);
