sosFixit.factory('replyingMessageService', function () {
    var conversationId = "";

    return {
        getData: function () {
            return conversationId;
        },
        setData: function (newFormData) {
            conversationId = newFormData;
        },
        resetData: function () {
            conversationId = "";
        }
    };
});
