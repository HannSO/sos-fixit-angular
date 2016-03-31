sosFixit.controller('indexLinkToProfileController',['savingUserService', '$rootScope', function(savingUserService, $rootscope) {

    self.saveCurrentUser = function(){
      console.log("ng-click");
      var currentUser = $rootScope.user;
      savingUserService.saveData(currentUser);
    };

}]);
