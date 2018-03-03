(function () {

    'use strict';

    angular

        .module('myApp')

        .controller('NaprawyCtrl', NaprawyCtrl);



    NaprawyCtrl.$inject = ['$log', '$rootScope', '$window', '$q', '$scope', 'SerwisFactory'];



    function NaprawyCtrl($log, $rootScope, $window, $q, $scope, SerwisFactory) {

        var vm = this;
        
        $scope.modelTxt = "1234567";

        $scope.txtChanged = function (text) {
            if (text.length != 0) {
                $scope.modelTxt = text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
        }

        $scope.txtChanged($scope.modelTxt);

        $scope.clickLipka = function () {
            alert("Lubię placki");
        }

        function onError(reason) {

            $log.error(reason);

        }

    }

})()