"use strict";

console.log("authCtrl.js loaded");

app.controller('AuthCtrl', function($scope, AuthFactory, $window, $location) {

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory
      .loginUser($scope.account)
      .then(() => {
        $scope.isLoggedIn = true;
        console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
        $scope.$apply();
        $window.location.href = "#!/home";
      });
  };

  $scope.loginGoogle = () => {
    console.log("you clicked login with Google");
    AuthFactory.authWithProvider()
      .then(function(result) {
        var user = result.user.uid;
        console.log("logged in user:", user);

        //Once logged in, go to another view

        $location.path("/home");
        $scope.$apply();
      }).catch(function(error) {

        // Handle the Errors.

        console.log("error with google login", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
});