sosFixit.controller('userProfileController', ['savingUserIdService', 'userInfoFactory', '$http',  function(savingUserIdService, userInfoFactory, $http) {

var self = this;

  getUserObject = function(){
    var userId = savingUserIdService.getData();
    console.log(userId);
    var userObject = userInfoFactory.getOneUserInfo(userId);
    console.log(userObject);
  };

}]);
