(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('OneCurrencyCtrl', OneCurrencyCtrl);

    OneCurrencyCtrl.$inject = ['$log', '$rootScope', '$window', '$q', '$scope', '$http', 'SerwisFactory'];

    function OneCurrencyCtrl($log, $rootScope, $window, $q, $scope, $http, SerwisFactory) {

        var vm = this;

        $scope.currency = $rootScope.rOneCurrency;
        var xD = [];
        function onError(reason) {
            $log.error(reason);
        }

    }

})()