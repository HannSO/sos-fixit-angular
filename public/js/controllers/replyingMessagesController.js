sosFixit.controller('replyingMessagesController', ['replyingMessageService', '$http',  function(replyingMessageService, $http) {
  var self = this;

  self.replyBody = '';

  self.sendReply = function(){
    conversationId = replyingMessageService.getData();
    conversationPath = "http://localhost:3000/conversations/" + conversationId + "/reply";
    $http.post(conversationPath, {body: self.replyBody});
  };


}]);
