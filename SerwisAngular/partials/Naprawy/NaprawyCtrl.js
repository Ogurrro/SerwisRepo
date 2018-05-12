(function () {

    'use strict';

    angular

        .module('myApp')

        .controller('NaprawyCtrl', NaprawyCtrl);



    NaprawyCtrl.$inject = ['$log', '$rootScope', '$window', '$q', '$scope', 'SerwisFactory', '$mdDialog', 'toastr'];



    function NaprawyCtrl($log, $rootScope, $window, $q, $scope, SerwisFactory, $mdDialog, toastr) {

        var vm = this;

        $scope.modelTxt = "1234567";

        $scope.txtChanged = function (text) {
            if (text.length !== 0) {
                $scope.modelTxt = text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
        };

        $scope.txtChanged($scope.modelTxt);

        $scope.clickLipka = function () {
            alert("Lubię placki");
        };


        $scope.dodajNapraweDialog = function (ev) {

            $mdDialog.show({

                controller: 'AddMeetingCtrl',

                templateUrl: 'partials/singleClientView/Meetings/Meeting/AddMeeting.html',

                parent: angular.element(document.body),

                targetEvent: ev,

                clickOutsideToClose: false,

                multiple: true,

                skipHide: true,

                locals: {
                    //naprawaId : 
                }
            }).then(function (answer) {

                toastr.success('Meeting added', { timeOut: 1000, positionClass: 'toast-bottom-right', showMethod: 'slideDown' });

                //$q.when(contactFactory.clientContactListData).then(displayerClientContacts);

            }, function () {

            });



        };

        function onError(reason) {

            $log.error(reason);

        }

    }

})();