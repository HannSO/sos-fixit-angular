sosFixit.controller("listMessages", ['mailboxFactory', 'mailboxService', function(mailboxFactory, mailboxService){

  var self = this;

  self.messages = [];
  self.loaded = false;

  (self.displayMessages = function() {
    mailboxFactory.getMessages(mailboxService.getData())
      .then(function(response) {
        console.log('test');
        self.loaded = true;
    });
  });

}]);
