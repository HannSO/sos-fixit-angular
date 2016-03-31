sosFixit.factory('savingUserIdService', function () {
    var userId = "";

    return {
        getData: function () {
            return userId;
        },
        setData: function (newFormData) {
            userId = newFormData;
        },
        resetData: function () {
            userId = "";
        }
    };
});
