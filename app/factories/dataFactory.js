"use strict";

console.log("dataFactory.js loaded");

//FIREBASE INTERACTION

app.factory("DataFactory", function($q, $http, FBCreds, AuthFactory){
    let user = AuthFactory.getUser();

    const addToWatchList = (movie) => {
        console.log("adding movie to firebase");
        return $q((resolve, reject) =>{
            $http.post(`${FBCreds.databaseURL}/movies.json`, JSON.stringify(movie))
            .then((movie) => {
                resolve(movie);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    const editMovie = (movie, obj) => {
        console.log('editing movie', movie, obj);
        return $q((resolve, reject) =>{
            $http.patch(`${FBCreds.databaseURL}/movies/${movie}.json`, JSON.stringify(obj))
            .then((newObj) =>{
                resolve(newObj.data);
            })
            .catch((error) => {
                reject(error);
            })
        });
    };

    const removeMovie = (movie) => {
        console.log('removing movie', movie);
        let movies = [];
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/movies/${movie}.json`)
            .then((userMovies) => {
                resolve(movies);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    return {addToWatchList, editMovie, removeMovie};

});