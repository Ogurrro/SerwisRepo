(function () {

    'use strict';


    angular.module('myApp').factory('SerwisFactory', SerwisFactory);

    SerwisFactory.$inject = ['$q', '$http', '$log'];

    function SerwisFactory($q, $http, $log) {
        var service = {
            tempData: [],
            allCurrencyData: [],

            getTemp: getTemp,
            getAllCurrency: getAllCurrency
        };

        return service;

        function getAllCurrency() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json'
            }).then(function successCallback(response) {
                deferred.resolve(response.data[0]);
                service.allCurrencyData = JSON.parse(result.data[0]);
            }, function errorCallback(response) { 
            });
            service.allCurrencyData = deferred.promise;
        }

        function getTemp() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.nbp.pl/api/exchangerates/tables/a/?format=json'
            }).then(function (result) {
                service.tempData = result.data;
                deferred.resolve(service.tempData);
            });
            return deferred.promise;
        }

        //function getTemp() {
        //    var deferred = $q.defer();
        //    $http.get("https://danepubliczne.imgw.pl/api/data/synop").success(function (result) {
        //        service.tempData = (JSON.parse(result.data));
        //        deferred.resolve(service.tempData);
        //    });
        //    return deferred.promise;
        //}
    }

})();




