sosFixit.controller('userProfileController', ['savingUserIdService', 'userInfoService', '$http',  function(savingUserIdService, userInfoService, $http) {

  getUserObject = function(){
    userId = savingUserIdService.getData();
    userObject = userInfoService.getOneUserInfo(userId);
  };

}]);
