sosFixit.controller('respondToJobRequestController',  ['$http', '$rootScope', function($http, $rootScope) {
  var self = this;
  self.inactiveJobs = [];

 self.getJobRequests = function($http){
   currentUserId = $rootScope.user.id;
   $http.get('http://location:3000/user/' + currentUserId +'/jobs/fixer_of')
    .success(function(allJobsObject){
     console.log(success);
     console.log("allJobs(object)",allJobsObject);
     console.log("firstJobObject", allJobsObject[0]);
     for(var i = 0; i < allJobsObject.length; i++);
     if ((allJobsObject.is_active) === false) {
       self.inactiveJobs.push(allJobsObject[i]);
     }
   });
 };
}]);
