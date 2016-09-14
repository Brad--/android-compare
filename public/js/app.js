( function() {
    var app = angular
        .module('CompareApp', []);

    app.controller('CompareCtrl', CompareCtrl);
    function CompareCtrl() {
        var self = this;
        self.phoneNames = [];
        self.phones = [];
        getPhones();

        function getPhones() {
            var phone1 = {
                'name': 'LG V20'
            }
            var phone2 = {
                'name': 'LG G5'
            }
            self.phones.push(phone1);
            self.phones.push(phone2);
            self.phoneNames.push(phone1.name);
            self.phoneNames.push(phone2.name);
        }
    }

    

})();