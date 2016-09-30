(function () {
    angular.module("myApp", ['ui.router', 'ngMaterial', 'jkAngularCarousel','ngMessages', 'material.svgAssetsCache','firebase'])

    .config(function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/main");
            //
            // Now set up the states
            $stateProvider
                .state('main', {
                    url: "/main",
                    template: '<home></home>'
                })
        })
        .controller('AppCtrl', function($scope, $mdDialog,$firebaseAuth,$log) {
            $scope.status = '  ';
            $scope.customFullscreen = false;
            var originatorEv;
            $scope.playerInfo = playerInfo;
            $scope.battle =battle;
            $scope.signOut = signOut;
            $scope.getDisplayName = function() {return userData ? userData.displayName || userData.email : undefined; }
            var userData = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyBAPdMPF0kjUAvfYwkrXxiMxBw9rqaC62A:[DEFAULT]'));
            $scope.$parent.displayName = $scope.getDisplayName();

            $scope.openNameMenu = function($mdOpenMenu, ev) {
                console.log("menu opend");
                originatorEv = ev;
                $mdOpenMenu(ev);
            };
            function playerInfo(){
            }
            function battle(){
                
            }
            function signOut(){
                var auth = $firebaseAuth();
                $log.log($scope.getDisplayName() + " logged out");
                $scope.displayName = undefined;
                auth.$signOut();
            }

            $scope.showAdvanced = function(ev) {
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'Templates/dialog1.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true,
                        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };

            function DialogController($scope, $mdDialog ,$firebaseAuth, $firebaseObject, $log) {
                
                $scope.login = login;

                function login(provider){
                    var auth = $firebaseAuth();
                    console.log("dialog controller");
                    auth.$signInWithPopup(provider)
                        .then(loginSuccess)
                        .catch(loginError);

                }

                function loginSuccess(firebaseUser) {
                    console.log("loginSuccess");
                    $mdDialog.cancel();
                    //$log.log(firebaseUser);
                    $scope.displayName =  $scope.$parent.displayName = firebaseUser.user ? firebaseUser.user.displayName : firebaseUser.email;
                    $scope.showLogin = false;
                    $scope.password = undefined;

                    $scope.providerUser = firebaseUser.user;
                    var ref = firebase.database().ref("users");
                    var profileRef = ref.child($scope.providerUser.uid);
                    $scope.user = $firebaseObject(profileRef);
                    //$log.log($scope.user);
                    //$log.log(profileRef);
                    $scope.user.$loaded().then(function () {
                        if (!$scope.user.displayName) {
                            $log.log("creating user...");
                            profileRef.set({
                                displayName: $scope.providerUser.displayName,
                                email: $scope.providerUser.email,
                                photoURL: $scope.providerUser.photoURL
                            }).then(function () {
                                $log.log("user created.");
                            }, function () {
                                $log.log("user could not be created.");
                            });
                        } else {
                            $log.log('user already created!');
                            
                        }
                    });
                }
                function loginError(error) {
                    console.log("loginfAil");
                    $mdDialog.cancel();

                    $log.log("Authentication failed:", error);
                }


                $scope.hide = function() {
                    $mdDialog.hide();
                };

                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                $scope.answer = function(answer) {
                    $mdDialog.hide(answer);
                };

            }
        });

})();