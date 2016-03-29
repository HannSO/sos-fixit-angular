sosFixit.factory('mailboxFactory', ['$http', function($http){

  var self = {};

  self.getConversations = function() {
    return $http.get('http://localhost:3000/conversations');
  };

  self.getMessages = function(searchParam) {
    return $http.get('http://localhost:3000/conversations/' + searchParam);
  };

  return self;

}]);
