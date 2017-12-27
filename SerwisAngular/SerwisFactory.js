myApp.factory('SerwisFactory', ['$http', '$q', SerwisFactory]);

function SerwisFactory($http, $q) {
    var service = {
        tempData: [],
        getTemp: getTemp
    };

    return service;

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
};
