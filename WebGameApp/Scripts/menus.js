(function(){

    angular.module('myApp')
        .component('menu', { // the tag for using this is <char-detail>
            templateUrl: "Templates/menu.html",
            controller: menuController

        });
    

    function menuController() {
            var vm = this;
        vm.numVal =numVal;
        // functions
        vm.add = add;


            function add(num){
                dmg = 1;
                
                
            }
         }
})();