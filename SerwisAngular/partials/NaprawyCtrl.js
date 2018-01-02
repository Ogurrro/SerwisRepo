(function () {

    'use strict';

    angular

        .module('myApp')

        .controller('NaprawyCtrl', NaprawyCtrl);



    NaprawyCtrl.$inject = ['$log', '$rootScope', '$window', '$q', '$scope', 'SerwisFactory'];



    function NaprawyCtrl($log, $rootScope, $window, $q, $scope, SerwisFactory) {

        var vm = this;

        //var w = angular.element($window);
        //$scope.getWidth = w.width();
        //if (w.width() > 1280) {
            
        //}
        //else {

        //}

        //$scope.$watch();

        $scope.clickLipka = function () {
            alert("Lubię placki");
        }

        function onError(reason) {

            $log.error(reason);

        }

    }

})()