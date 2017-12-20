"use strict";

console.log("HomeCtrl.js loaded");

app.controller('HomeCtrl', function($scope, DataFactory, AuthFactory, $routeParams, $location, $window){

    let user = AuthFactory.getUser();

    $scope.myMovies = {
        "title": "",
        "genre": "",
        "poster": "",
        "description": ""
    };
});
