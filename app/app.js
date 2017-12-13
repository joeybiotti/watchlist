"use strict";

console.log("app.js loaded");

const app = angular.module('WatchListApp', ['ngRoute']);


const isAuth = AuthFactory => new Promise ((resolve, reject) =>{
    if(AuthFactory.isAuthenticated()){
        console.log("user authenticated, resolve");
        resolve();
    } else {
        console.log("user not autenticated, reject");
        reject();
    }
})

app.config(($routeProvider) => {
    /*
    CONFIGURE ANGULAR ROUTES HERE
    */
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: "AuthCtrl"
        })
        .when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: "ProfileCtrl"
        })
});

app.run(($location, FBCreds, MDBCreds) => {
    let MBDauthConfig = {
        apiKey: MDBCreds.apiKey,
    };

    let FBauthConfig = {
        apiKey: FBCreds.apiKey,
        authDomain: FBCreds.authDomain,
        databaseURL: FBCreds.databaseURL
    };

    firebase.initializeApp(FBauthConfig);

});