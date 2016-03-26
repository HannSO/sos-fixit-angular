sosFixit.controller("searchController", ['uiGmapGoogleMapApi','skillsResourceFactory', 'uiGmapIsReady', function(uiGmapGoogleMapApi, skillsResourceFactory, uiGmapIsReady){

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

  self.getUsersSkills = function() {

    skillsResourceFactory.getUserList(self.searchParam)

      .then(function(response) {

        self.loaded = false;

        var userSkillLength = response.data.skill.users.length;
        var allSkillUsers = response.data.skill.users;

        for (var i = 0; i < userSkillLength; i++){

            userLat = allSkillUsers[i].user.latitude;
            userLng = allSkillUsers[i].user.longitude;
            userLocation = new google.maps.LatLng(userLat, userLng);
            dist = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(51.5117, 0.1233),userLocation);
            distToMiles = (dist*0.000621371192).toFixed(1);

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
