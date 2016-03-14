var asanApp = angular.module('asanApp', []);

asanApp.controller('TC', [function($scope) {
        $scope.val = 'ddd';
    }]);

asanApp.controller('AccordionController', function asanController($rootScope, TestService) {

    $rootScope.vai = 'FUNZICA';

    $scope.data_select_ats = {
        availableOptions: TestService.square(),
        selectedOption: {
            "name": "",
            "shortname": "",
            "reknown": "",
            "bio": ""
        } //Il valore di default della SELECT
    };


    $scope.svuota = function() {
        $scope.do_codice_processo = '';
        $scope.data_select_ats.selectedOption = {
            "name": "",
            "shortname": "",
            "reknown": "",
            "bio": ""
        };

    };

    $scope.submit = 'ddddd';

});

