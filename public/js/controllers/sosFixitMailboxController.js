sosFixit.controller('mailboxController', ['mailboxFactory', 'mailboxService','replyingMessageService', '$rootScope', '$http', function(mailboxFactory, mailboxService, replyingMessageService, $rootScope, $http){

  var self = this;

  self.messages = [];
  self.conversations = [];
  self.conversationId = 'hello';
  self.myMessage = false;
  self.true = false;
  self.isCurrentUserRequesting = '';
  self.senderId = null;
  self.recipientId = null;
  self.fixerId = null;
  self.currentUser = null;
  self.showJobs = false;
  self.noJobs = false;

  self.nameOfJob = '';

  self.inactiveJobs = [];



  self.setCurrentUser = function(){
    console.log("we've succesfuly setting currentUser");
    self.currentUser = $rootScope.user.id;
    console.log(self.currentUser);
  };

  self.isMyMessage = function(senderId) {
    self.currentUser = $rootScope.user.id;
    console.log("isMyMesage function", self.currentUser);
    if (self.currentUser === senderId) {
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
    console.log(json);
    var firstSenderId = json.data.conversation.mailboxer_receipts[0].mailboxer_receipt.message.user.id;
    console.log(firstSenderId);
    if ($rootScope.user.id === firstSenderId) {
      self.isCurrentUserRequesting = false;
    } else {
      self.isCurrentUserRequesting= true;
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
          console.log(json);
          self.fixerId = json.data.conversation.mailboxer_receipts[1].mailboxer_receipt.message.user.id;
          console.log(self.fixerId);
          // if (self.recipientId !== $rootScope.user.id){
          //   self.senderId = self.recipientId;
          //   console.log(self.senderId);
          // } else {
          //   self.fixerId = self.recipientId;
          //   console.log(self.recipientId);
          // }

        }

      }

      var jobCreatePath = 'http://localhost:3000/jobs';
      console.log("currentUser: " + currentUser);
      console.log("Fixer: " + self.fixerId);

      $http.post(jobCreatePath, {recipient_id: currentUser, fixer_id: self.fixerId, name: self.nameOfJob});
      self.nameOfJob = '';
    });
  };

  self.setConversationId = function() {
    console.log("callingmethod");
    mailboxService.getData();
    console.log(mailboxService.getData());
  };

  self.getJobRequests = function(){
    self.showJobs = true;

    console.log("hello");
    console.log($rootScope);
    console.log($rootScope.user);
    console.log($rootScope.user.id);
    self.currentUser = $rootScope.user.id;
    console.log(self.currentUser);
    $http.get('http://localhost:3000/user/' + self.currentUser +'/jobs/fixer_of')
     .success(function(allJobsObject){

      for(var i = 0; i < allJobsObject.length; i++){
        var job = (allJobsObject[i].job) ;
        self.inactiveJobs.push(job);
      }
        // self.inactiveJobs.push(job);
    if (self.inactiveJobs.length === 0){
      self.noJobs = true;
    }

    });

  };


}]);
