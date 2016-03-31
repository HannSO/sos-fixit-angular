sosFixit.controller('replyingMessagesController', ['mailboxService', '$http',  function(mailboxService, $http) {
  var self = this;

  self.replyBody = '';

  self.sendReply = function(){
    conversationId = mailboxService.getData();
    conversationPath = "http://localhost:3000/conversations/" + conversationId + "/reply";
    $http.post(conversationPath, {body: self.replyBody});
    console.log("conversation id");
  };


}]);
