"use strict";

console.log("app.js loaded");

const app = angular.module('WatchListApp', ['ngRoute']);

app.config(($routeProvider) => {
    $routeProvider
    .when('/home', {
        templateUrl:'partials/home.html',
        controller: 'HomeCtrl'
    })
});

app.run(($location) =>{
// auth sign in will go here.
});