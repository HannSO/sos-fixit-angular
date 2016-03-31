sosFixit.controller('sendingMessagesController', ['savingUserIdService', '$http',  function(savingUserIdService, $http) {
  var self = this;
 self.messageBody = '';
 self.messageSubject = '';
 self.recipientId = [];

  self.sendMessage = function() {
    var postPath = "http://localhost:3000/messages";
    self.recipientId = savingUserIdService.getData();
    savingUserIdService.resetData();
    var json = {recipient: self.recipientId, message: {body: self.messageBody, subject: self.messageSubject}};
    $http.post(postPath, json);
    self.messageBody = '';
    self.messageSubject ='';
  };

}]);
