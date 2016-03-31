sosFixit.controller('sendingMessagesController', ['savingUserIdService', '$http',  function(savingUserIdService, $http) {
  var self = this;
 self.messageBody = '';
 self.messageSubject = '';
 self.recipientId = [];

  self.sendMessage = function() {
    var postPath = "http://localhost:3000/messages";
<<<<<<< HEAD
    var recipientId = savingUserIdService.getData();
=======
    self.recipientId = savingUserIdService.getData();
>>>>>>> 208f229ec4d0e48a3a40c3973d2f556c2efa7399
    savingUserIdService.resetData();
    console.log("inside send message");
    console.log(self.recipientId);
    var json = {recipient: self.recipientId, message: {body: self.messageBody, subject: self.messageSubject}};
    $http.post(postPath, json);
    self.messageBody = '';
    self.messageSubject ='';
  };

}]);
