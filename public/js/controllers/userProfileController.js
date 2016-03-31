sosFixit.controller('userProfileController', ['userInfoResourceFactory','savingUserService','savingUserIdService', '$http',
function(userInfoResourceFactory, savingUserService, savingUserIdService, $http) {

var self = this;

self.userObject = '';
self.userId = '';
self.userJobs = '';
self.userReceivedJobs = '';
self.jobsCount = '';
self.receivedJobsCount = '';
self.userSkills = '';


  getUserObject = function(){
    self.userObject = savingUserService.getData();
    self.userId = self.userObject.id;
    console.log(self.userObject);
  };

  getJobs = function(){
    userInfoResourceFactory.getJobsDone(self.userId)
    .then(function(jobs){
      self.userJobs = jobs.data;
    });
    self.jobsCount = self.userJobs.length;
  };

  getJobsReceived = function(){
    userInfoResourceFactory.getJobsReceived (self.userId)
    .then(function(jobs){
      self.userReceivedJobs = jobs.data;
    });
    self.receivedJobsCount = self.userJobs.length;
  };

  getSkills = function(){
    userInfoResourceFactory.getSkills(self.userId)
    .then(function(skills){
      self.userSkills = skills.data;
    });
  };

  getUserObject();
  getJobs();
  getJobsReceived();
  getSkills();


}]);
