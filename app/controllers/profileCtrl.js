"use strict";

app.controller('ProfileCtrl', function(AuthFactory, DataFactory, SearchTerm, $scope, $location){
    console.log("profile controller loaded");

    let user = AuthFactory.getUser();

    $scope.movies = [];
    $scope.searching = SearchTerm;

    DataFactory.getUserWatchlist(user)
    .then((movies) =>{
        $scope.movies = movies;
    });

    $scope.edit = (movie, toEdit) => {
        console.log("EDIT", toEdit, movie);
        DataFactory.editMovie(movie, toEdit)
        .then((x) =>{
            console.log("updated list", x);
        });
    };
});