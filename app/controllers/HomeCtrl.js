"use strict";

console.log("HomeCtrl.js loaded");

app.controller('HomeCtrl', function($scope, DataFactory, AuthFactory, $routeParams, $location, SearchTerm, $window){

    let user = AuthFactory.getUser();

    $scope.movies = [];
    $scope.searching = SearchTerm;

    DataFactory.getUserMovies(user)
    .then((movies) =>{
        $scope.movies = movies;
    });

    $scope.edit = (movie, toEdit) => {
        console.log('Edit', toEdit, movie);
        DataFactory.editMovie(movie, toEdit)
        .then((film) =>{
            console.log('updated firebase', film);
        })
    }
});
