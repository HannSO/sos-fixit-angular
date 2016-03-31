sosFixit.controller('userProfileController', ['savingUserService','savingUserIdService', 'userInfoFactory', '$http',  function(savingUserService, savingUserIdService, userInfoFactory, $http) {

var self = this;

self.userObject = {};

getUserObject = function(){

    return savingUserService.getData();

  };


}]);
