
(function(){

    angular.module('myApp')
        .component('battle', { // the tag for using this is <char-detail>
            templateUrl: "Templates/battle.html",
            controller: battleController,
            controllerAs: 'vm'
        })
        .config(battleConfig);

    function battleConfig($stateProvider) {
        $stateProvider.state('battle', {
            // url: '/battle',
            url: '/battle/:opponent',
            // params: ['opponent'],
            template: '<battle></battle>'
        });
    }

    function battleController($stateParams) {
        var vm = this;
        vm.opponent = $stateParams.opponent;
        console.log(vm.opponent);
        vm.modalClose = function modalClose() {
            console.log('sup');
            $('#myModal').modal('hide');
        };
        vm.damageOne = function damageOne() {
            var dead = document.getElementById('playerTwoHealth');
            var damageOne;
            document.getElementById('playerTwoHealth').value -= damageOne = Math.floor(Math.random() * 3) + 5;
            document.getElementById('results').value += 'Nemo uses Flippy Flipper Flip and deals ' + damageOne + ' damage!\n';
            if (dead.value <= 0) {
                console.log('dead');
                alert('Congratulations you won!');
                document.getElementById('endGame').innerHTML = "Continue";
                document.getElementById('gameScreen').innerHTML = "";
            } else {
                console.log('alive')
            }
        };
        vm.damageTwo = function damageTwo() {
            var dead = document.getElementById('playerTwoHealth');
            var damageTwo;
            document.getElementById('playerTwoHealth').value -= damageTwo = Math.floor(Math.random() * 9) + 2;
            document.getElementById('results').value += 'Nemo uses Super Speedy Attack and deals ' + damageTwo + ' damage!\n';
            if (dead.value <= 0) {
                console.log('dead');
                alert('Congratulations you won!');
                document.getElementById('endGame').innerHTML = "Continue";
                document.getElementById('gameScreen').innerHTML = "";
            } else {
                console.log('alive')
            }
        };
        vm.damageThree = function damageThree() {
            var dead = document.getElementById('playerTwoHealth');
            var damageThree;
            document.getElementById('playerTwoHealth').value -= damageThree = Math.floor(Math.random() * 7) + 3;
            document.getElementById('results').value += 'Nemo uses Parent Bait and deals ' + damageThree + ' damage!\n';
            if (dead.value <= 0) {
                console.log('dead');
                alert('Congratulations you won!');
                document.getElementById('endGame').innerHTML = "Continue";
                document.getElementById('gameScreen').innerHTML = "";
            } else {
                console.log('alive')
            }
        };
    }
})();
