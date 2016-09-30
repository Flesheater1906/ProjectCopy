(function(){

    angular.module('myApp')
        .component('characterSelect', { // the tag for using this is <char-detail>
            templateUrl: "Templates/characterSelect.html",
            controller: characterSelectController,
            controllerAs: 'vm'
        })
        .config(aboutConfig);


    function aboutConfig($stateProvider) {
        $stateProvider.state('characterSelect', {
            url: '/Character Select',
            template: '<character-select style="background-color:red;"></character-select>'
            
        });
    }

    function characterSelectController(characterService, $state) {
        var vm = this;
        vm.isOpen = false;
        vm.selectedMode = 'md-fling';
        vm.selectedDirection = 'down';

        console.log(characterService);
        
        vm.evilDwelers = characterService.evilDwelers;
        vm.select = function (evilDweler) {
            console.log('hello', evilDweler);
            $state.go('battle', {opponent:evilDweler});
        };
    }
})();
