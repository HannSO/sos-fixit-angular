sosFixit.factory('userDistanceCalcFactory', ['uiGmapGoogleMapApi', 'uiGmapIsReady', function(uiGmapGoogleMapApi, uiGmapIsReady){

  var self = this;

  self.userDistance = function(currentUser,user) {
    dist = google.maps.geometry.spherical.computeDistanceBetween(currentUser,user);
    distToMiles = (dist*0.000621371192).toFixed(1);
  }

  // self.userLatLng = function(lat,lng) {
  //   new google.maps.LatLng(lat,lng);
  // }

  return self;

}]);
