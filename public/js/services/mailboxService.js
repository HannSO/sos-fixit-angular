sosFixit.factory('mailboxService', function () {
    var messageList = {};

    return {
        getData: function () {
            return messageList;
        },
        setData: function (newFormData) {
            messageList = newFormData;
        },
        resetData: function () {
            messageList = {};
        }
    };
});
