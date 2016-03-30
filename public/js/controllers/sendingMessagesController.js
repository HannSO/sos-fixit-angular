sosFixit.controller('sendingMessagesController', ['sendingMessageService', '$http',  function(sendingMessageService, $http) {
  var self = this;
  self.messageBody = '';
  self.messageSubject = '';

  self.sendMessage = function() {
    var postPath = "http://localhost:3000/messages";
    var recipientId = sendingMessageService.getData();
    sendingMessageService.resetData();
    var json = {recipient: recipientId, message: {body: self.messageBody, subject: self.messageSubject}};
    $http.post(postPath, json);
    self.messageBody = '';
    self.messageSubject ='';
  };

}]);
