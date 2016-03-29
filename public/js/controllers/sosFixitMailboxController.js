sosFixit.controller('mailboxController', ['mailboxFactory', 'mailboxService', function(mailboxFactory, mailboxService){

  var self = this;

  self.messages = [];
  self.conversations = [];

  (self.getMailbox = function() {
    mailboxFactory.getConversations()
      .then(function(json) {
        console.log(json.data);
        for (var i = 0; i < json.data.length; i ++){
          self.conversations.push(json.data[i].mailboxer_conversation);
        }
    });
  });

  self.getMessages = function(conversation){
    self.messages = [];
    self.searchParam = conversation.id;
    mailboxService.setData(self.searchParam);
    console.log(self.searchParam);
    console.log(mailboxFactory.getMessages(self.searchParam));
    mailboxFactory.getMessages(self.searchParam)
    .then(function(json) {
      console.log(json.data);
      for (var i = 0; i < json.data.conversation.mailboxer_receipts.length; i ++){
        console.log(json.data.conversation.mailboxer_receipts[i].mailboxer_receipt);
        if (json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.mailbox_type == 'inbox') {
          self.messages.push(json.data.conversation.mailboxer_receipts[i].mailboxer_receipt.message);
        }
      }
    });
  };

  // self.sendNewMessage = function (conservation){
  //
  //   // $http.post("http://localhost:3000/messages/", {recipients: recipient, {message: {body: body, subject: subject}});
  // };
  //
  // Routes
  //
  // post new message:
  //
  //
  // (post)reply to existing message:
  // http//localhost:3000/:id/reply



  // self.sendMessages = function(conversation){
  //
  // };
}]);
