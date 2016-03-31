sosFixit.controller('sendingMessagesController', ['savingUserIdService', '$http',  function(savingUserIdService, $http) {
  var self = this;
 self.messageBody = '';
 self.messageSubject = '';
 self.recipientId = [];

  self.sendMessage = function() {
    var postPath = "http://localhost:3000/messages";
    // savingUserIdService.resetData();
    self.recipientId = savingUserIdService.getData();
    console.log("inside send message");
    console.log(self.recipientId);
    var json = {recipient: self.recipientId, message: {body: self.messageBody, subject: self.messageSubject}};
    $http.post(postPath, json);
    console.log($http.post(postPath, json));
    self.messageBody = '';
    self.messageSubject ='';
  };

}]);
