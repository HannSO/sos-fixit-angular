sosFixit.factory('userDistanceCalcFactory', ['uiGmapGoogleMapApi', 'uiGmapIsReady', function(uiGmapGoogleMapApi, uiGmapIsReady){

  var self = this;

  self.userDistance = function(currentUser,user) {
    dist = google.maps.geometry.spherical.computeDistanceBetween(currentUser,user);
    distToMiles = (dist*0.000621371192).toFixed(1);
  }

  return self;

}]);
