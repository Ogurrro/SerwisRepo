(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('PogodaCtrl', PogodaCtrl);

    PogodaCtrl.$inject = ['$log', '$rootScope', '$window', '$q', '$scope', '$http', 'SerwisFactory', '$location'];

    function PogodaCtrl($log, $rootScope, $window, $q, $scope, $http, SerwisFactory, $location) {

        var vm = this;
        //var fg = [];
        //SerwisFactory.getTemp();
        //$q.when(SerwisFactory.tempData).then(displayerTemp);
        //var fcg = [];

        $http({
            method: 'GET',
            url: 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json'
        }).then(function successCallback(response) {
            $scope.pData = response.data[0];
        }, function errorCallback(response) {
            $scope.error = response.data;
        });

        $scope.openCurrency = function (currData) {
            $http({
                method: 'GET',
                url: 'http://api.nbp.pl/api/exchangerates/rates/a/'+currData.code+'/last/10/?format=json'
            }).then(function successCallback(response) {
                var oneCurrency = response.data;
                $rootScope.rOneCurrency = oneCurrency;
                $location.path("/oneCurrency");
            }, function errorCallback(response) {
                $scope.error = response.data;
            });
        }

        function displayerTemp(result) {
            $scope.allData = result[0];
        }

        function onError(reason) {
            $log.error(reason);
        }

    }

})()