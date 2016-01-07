(function () {
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$http'];

    function homeCtrl($http) {
        var vm = this;

        vm.directories = [];
        
        activate();

        function activate() {
            $http({
                method: 'GET',
                url: '/api/projects'
            }).then(function successCallback(response) {
                vm.directories = response.data;
            }, function errorCallback(response) {
                // todo
            });
        }
    }
} ());