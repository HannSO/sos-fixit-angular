sosFixit.controller('mailboxController', ['mailboxFactory', 'mailboxService','replyingMessageService', '$rootScope', '$http', function(mailboxFactory, mailboxService, replyingMessageService, $rootScope, $http){

  var self = this;

  self.messages = [];
  self.conversations = [];
  self.conversationId = 'hello';
  self.myMessage = false;
  self.true = false;
  self.isCurrentUserRequesting = false;
  self.senderId = null;
  self.recipientId = null;
  self.fixerId = null;

  self.isMyMessage = function(senderId) {

    currentUser = $rootScope.user.id;
    if (currentUser === senderId) {
      return true;
    } else {
      return false;
    }

  };

  (self.getMailbox = function() {
    mailboxFactory.getConversations()
    .then(function(json) {
      for (var i = 0; i < json.data.length; i ++){
        self.conversations.push(json.data[i].mailboxer_conversation);
      }
    });
  });

  self.getMessages = function(conversation){
    self.true = true;
    self.messages = [];
    self.conversationId= conversation.id;
    mailboxService.setData(self.conversationId);
    console.log(mailboxService.getData(self.conversationId));
    mailboxFactory.getMessages(self.conversationId)
    .then(function(json) {
      self.didTheyinitiateTheConversation(json);
      console.log(self.isCurrentUserRequesting);

      for (var i = 0; i < json.data.conversation.mailboxer_receipts.length; i ++){
        if (json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.mailbox_type == 'inbox') {
          self.messages.push(json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.message);
        }
      }
    });

  };

  self.didTheyinitiateTheConversation = function(json){
    var object = json;
    var firstSenderId = json.data.conversation.mailboxer_receipts[0].mailboxer_receipt.message.user.id;
    // console.log(firstSenderId);
    if ($rootScope.user.id === firstSenderId) {
      self.isCurrentUserRequesting = true;
    } else {
      self.isCurrentUserRequesting= false;
    }
  };

  self.createJob = function() {
    var currentUser = $rootScope.user.id;
    mailboxService.getData(self.conversationId);

    mailboxFactory.getMessages(self.conversationId)
    .then(function(json){
      for (var i = 0; i < json.data.conversation.mailboxer_receipts.length; i++){
        var inboxMessages = (json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.mailbox_type == 'inbox');
        if (json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.mailbox_type == 'inbox'){
          console.log(inboxMessages);
          self.recipientId = json.data.conversation.mailboxer_receipts[1].mailboxer_receipt.message.user.id;
          if (self.recipientId !== $rootScope.user.id){
            self.senderId = self.recipientId;
            console.log(self.senderId);
          } else {
            self.fixerId = self.recipientId;
            console.log(self.recipientId);
          }
        }
      }

      var jobCreatePath = 'http://localhost:3000/jobs';
      $http.post(jobCreatePath, {recipient_id: currentUser, fixerId: self.fixerId});
    });
  };

  self.setConversationId = function() {
    console.log("callingmethod");
    mailboxService.getData();
    console.log(mailboxService.getData());
  };

}]);
