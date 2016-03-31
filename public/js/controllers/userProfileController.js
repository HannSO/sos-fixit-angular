sosFixit.controller('userProfileController', ['savingUserService','savingUserIdService', 'userInfoFactory', '$http',  function(savingUserService, savingUserIdService, userInfoFactory, $http) {

var self = this;

self.userObject = {};

  self.getUserObject = function(){
    console.log(savingUsingUserService.getData());
    console.log(savingUsingUserService.getData.email);
    var userProfileObj = savingUsingUserService.getData;

    self.userObject  = savingUsingUserService.getData;
  };

  self.getUserObject();


}]);
