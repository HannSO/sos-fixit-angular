sosFixit.controller('userProfileController', ['savingUserService', function(savingUserService) {

var self = this;

self.userObject = {};

self.getUserObject = function(){
    console.log("getting user object");
    self.userObject = savingUserService.getData();
    console.log(self.userObject);
  };


}]);
