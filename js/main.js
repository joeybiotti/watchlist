"use strict";

console.log("main.js loaded");

const app = angular.module('WatchListApp', ['ngRoute', 'ui.bootstrap']);

app.config(($routeProvide) =>{
    $routeProvider
    .when('/#', {
        templateUrl:'partials/home.html',
        controller: 'HomeCtrl'
    });
});

app.run(($location) =>{

});


$(function(){
    $("#sortable").sortable(),
    $("#sortable").disableSelection()
});