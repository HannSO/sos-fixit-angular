sosFixit.factory('skillsListService', function () {
    var skillsUserList = {};

    return {
        getData: function () {
            //You could also return specific attribute of the form data instead
            //of the entire data
            return skillsUserList;
        },
        setData: function (newFormData) {
            //You could also set specific attribute of the form data instead
            skillsUserList = newFormData;
        },
        resetData: function () {
            //To be called when the data stored needs to be discarded
            skillsUserList = {};
        }
    };
});
