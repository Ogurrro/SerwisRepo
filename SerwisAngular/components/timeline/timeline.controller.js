(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('TimelineController', TimelineController);

    TimelineController.$inject = [];

    function TimelineController() {

        var vm = this;

        vm.statusList = [
            { status: 'Brak działań', inputDate: new Date(), descr: 'Prospekt z potencjałem', completed: true },
            { status: 'Wstępne rozmowy', inputDate: new Date(), descr: 'Prospekt z potencjałem', completed: true },
            { status: 'Planowanie podpisania umowy', inputDate: null, descr: 'Prospekt z potencjałem', completed: false },
            { status: 'Umowa podpisana', inputDate: null, descr: 'Prospekt z potencjałem', completed: false }
        ]
    }

})();