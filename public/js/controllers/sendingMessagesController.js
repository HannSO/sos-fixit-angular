sosFixit.controller('sendingMessagesController', ['sendingMessageService', '$http',  function(sendingMessageService, $http) {
  var self = this;
 self.messageBody = '';
 self.messageSubject = '';

  self.sendMessage = function() {
    console.log("SENDING MESSAGE");
    var postPath = "http://localhost:3000/messages";
    console.log(postPath);
    var recipientId = sendingMessageService.getData();
    sendingMessageService.resetData();
    console.log(recipientId);
    var json = {recipient: recipientId ,message: {body: self.messageBody, subject: self.messageSubject}};

    $http.post(postPath, json );
    console.log($http.post(postPath, json));
  };

}]);
