"use strict";

app.factory("MDBFactory", function($q, $http, AuthFactory, MDBCreds){

    let user = AuthFactory.getUser();

    const getMovies = (withGenre, withoutGenre) => {
        return $q((resolve, reject) =>{
            console.log('search url: ', MDBCreds.SearchURL + withGenre + withoutGenre);
            $http.get(`${MDBCreds.SearchURL}${withGenre}${withGenre}`)
            .then((data) => {
                resolve(data.data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    return {getMovies}
});