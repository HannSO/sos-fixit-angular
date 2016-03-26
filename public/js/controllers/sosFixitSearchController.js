sosFixit.controller("searchController", ['$rootScope','uiGmapGoogleMapApi','skillsResourceFactory', 'uiGmapIsReady', 'userDistanceCalcFactory', function($rootScope, uiGmapGoogleMapApi, skillsResourceFactory, uiGmapIsReady, userDistanceCalcFactory){

  var self = this;

  self.users = [];
  self.searchParam = '';
  self.skills =[];

  self.getSkillsList = function() {
    skillsResourceFactory.getSkillsList()
      .then(function(json) {
      for (var i = 0; i < json.data.length; i ++){
        self.skills.push(json.data[i].skill);
      }
    });
  };

  self.saveSkills = function(skill){
    self.searchParam = skill.id;
    self.users = [];
  };

  self.getUsersSkills = function() {

    skillsResourceFactory.getUserList(self.searchParam)

      .then(function(response) {

        self.loaded = false;

        var currentUserLocation = new google.maps.LatLng($rootScope.user.latitude,$rootScope.user.longitude);
        var userSkillLength = response.data.skill.users.length;
        var allSkillUsers = response.data.skill.users;

        for (var i = 0; i < userSkillLength; i++){

            userLat = allSkillUsers[i].user.latitude;
            userLng = allSkillUsers[i].user.longitude;
            userLocation = new google.maps.LatLng(userLat, userLng);
            userDistanceCalcFactory.userDistance(currentUserLocation, userLocation);

          self.users.push(
            {"name": allSkillUsers[i].user.name,
            "email": allSkillUsers[i].user.email,
            "distance": distToMiles
            }
          );

        }

        self.loaded = true;

      });
  };

}]);
