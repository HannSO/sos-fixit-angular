sosFixit.factory('skillsListService', function () {
    var skillsUserList = {};

    return {
        getData: function () {
            return skillsUserList;
        },
        setData: function (newFormData) {
            skillsUserList = newFormData;
        },
        resetData: function () {
            skillsUserList = {};
        }
    };
});
