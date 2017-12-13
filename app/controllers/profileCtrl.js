"use strict";

app.controller('ProfileCtrl', function(AuthFactory, DataFactory, SearchTerm, $scope, $location){
    console.log("profile controller loaded");

    let user = AuthFactory.getUser();

    $scope.movies = [];
    $scope.searching = SearchTerm;

    DataFactory.getUserWatchlist(user)
    .then((movies) =>{
        $scope.savedMovies = movies;
        console.log("$scope.savedMovies", $scope.savedMovies);
        console.log("movies", movies);
    });

    $scope.edit = (movie, toEdit) => {
        console.log("edit movies", toEdit, movie);
        DataFactory.editMovie(movie, toEdit)
        .then((x) =>{
            console.log("updated list", x);
        });
    };

    $scope.remove = (movie) => {
        console.log("$scope.savedMovies", $scope.savedMovies);
        DataFactory.removeMovie(movie)
        .then(() => {
            $scope.savedMovies = newList;
        });
        console.log("$scope.savedMovies after click", $scope.savedMovies);
        let newSavedMovies = $scope.savedMovies;
    };
});