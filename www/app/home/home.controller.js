(function(){
    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);
        
    function homeCtrl(){
        var vm = this;
        
        vm.directories = ['ExampleProject'];
    }
}());