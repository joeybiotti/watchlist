"use strict";

console.log("NavCtrl.js loaded");

app.controller('NavCtrl', function($scope, $window){

    $scope.isLoggedIn = false;

    firebase.auth().onAuthStateChange(function(user){
        if(user){
            $scope.isLoggedIn = true;
            console.log('user logged in ', user, $scope.isLoggedIn);
            $scope.apply();
        }else{
            $scope.isLoggedIn = false;
            console.log('user logged in ', $scope.isLoggedIn);
            $window.location.href = '#!/auth';
        }
    });

    let logout = () => {
        console.log('logout clicked');
        AuthFactory.logout()
        .then(function(data) {
            console.log('logged out? ', data);
            $window.location.url = '#!/home';
            }, function(error){
            console.log('error occured on logout');
        });
    };

    $scope.logout = () => {
        console.log('logout clicked');
        AuthFactory
        .logout($scope.account)
        .then(()=>{
            $window.location.href = '#/main';
        });
    };

});