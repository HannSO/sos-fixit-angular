sosFixit.factory('registrationLocationFactory', ['uiGmapGoogleMapApi', function(uiGmapGoogleMapApi){

  var locationPicker = function() {

    var self = this;

    self.map = {
      center: { latitude: 51.5285, longitude: 0.0847 },
      zoom: 12,
      options: { mapTypeControl: false }
     };

    var events = {
      places_changed: function (searchBox) {
        var place = searchBox.getPlaces();
        if (!place || place === 'undefined' || place.length === 0) {
          console.log('no place data :(');
          return;
        }
        self.location= place[0].name;
        self.lat = place[0].geometry.location.lat();
        self.lng = place[0].geometry.location.lng();
        self.map = {
                center:{
                    latitude: place[0].geometry.location.lat(),
                    longitude: place[0].geometry.location.lng()
                },
            zoom:10
        };
        self.marker = {
          idKey: '0',
          coords: {
            latitude: place[0].geometry.location.lat(),
            longitude: place[0].geometry.location.lng()
          },
          options: {
            icon: '../../../images/pin.png'
          }
        }
      }
    };
    self.searchbox = { template: 'searchbox.tpl.html', events: events };
    };

  return locationPicker;

}]);
