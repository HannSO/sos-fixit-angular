sosFixit.factory('savingUserService', function () {
    var user = [];

    return {
        getData: function () {
            return user;
        },
        setData: function (newFormData) {
            user = newFormData;
        },
        resetData: function () {
            user = "";
        }
    };
});
