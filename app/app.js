"use strict";

console.log("app.js loaded");

const app = angular.module('WatchListApp', ['ngRoute']);

let isAuth = (AuthFactory) =>
    new Promise(function(resolve, reject){
        AuthFactory.isAuthenticated()
        .then((userExists) =>{
            if(userExists){
                console.log("user exists");
                resolve();
            }else{
                console.log("user does not exist");
                reject();
            }
        });
    });

app.config(($routeProvider) => {
    $routeProvider
    .when('/home', {
        templateUrl:'partials/home.html',
        controller: 'HomeCtrl'
    })
});

app.run(($location, FBCreds) =>{
    let FBauthConfig = {
        apiKey: FBCred.apiKey,
        authDomain: FBCreds.authDomain,
        databaseURL: FBCreds.databaseURL
    };

    firebase.initializeApp(FBauthConfig);

});