angular.module('SosFixit')
  .controller('UserSessionsCtrl', function(){

    var self = this;

    self.$on('auth:login-error', function(ev, reason){
      self.error= reason.errors[0];
    });
    self.login = true;

  }]);
