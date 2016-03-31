
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
    console.log('in getting user object');
    self.userObject = savingUserService.getData();
    console.log(self.userObject);
    self.userId = self.userObject.id;
    console.log('this',self.userId);
    console.log(self.userObject);
  };

  getJobs = function(){
    console.log('in jobs');
    userInfoResourceFactory.getJobsDone(self.userId)
    .then(function(jobs){
      self.userJobs = jobs.data;
      console.log(jobs.data);
      console.log("userJOBS!!!",self.userJobs);
      self.jobsCount = self.userJobs.length;
      console.log("JOBSCOUNT", self.userCount);
    });

    console.log(self.jobsCount);
  };

  getJobsReceived = function(){
    userInfoResourceFactory.getJobsReceived(self.userId)
    .then(function(jobs){
      console.log(self.userId);
      console.log(jobs);
      self.userReceivedJobs = jobs.data;
      self.receivedJobsCount = self.userJobs.length;
    });

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
