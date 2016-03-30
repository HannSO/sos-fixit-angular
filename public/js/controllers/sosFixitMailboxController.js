sosFixit.controller('mailboxController', ['mailboxFactory', 'mailboxService','replyingMessageService', '$rootScope', function(mailboxFactory, mailboxService, replyingMessageService, $rootScope){

  var self = this;

  self.messages = [];
  self.conversations = [];
  self.searchParam = '';
  self.myMessage = false;

  self.isMyMessage = function(senderId) {

    currentUser = $rootScope.user.id;
    console.log(currentUser);
    console.log(senderId);
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
    self.messages = [];
    self.searchParam = conversation.id;
    mailboxService.setData(self.searchParam);
    mailboxFactory.getMessages(self.searchParam)
    .then(function(json) {
      console.log(self.searchParam);
      for (var i = 0; i < json.data.conversation.mailboxer_receipts.length; i ++){
        if (json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.mailbox_type == 'inbox') {
          self.messages.push(json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.message);
        }
      }
    });
  };

  self.setConversationId = function(){
    replyingMessageService.setData(self.searchParam);
    console.log(replyingMessageService.getData());

  };


}]);
