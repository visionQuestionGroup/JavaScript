;(function (){

  'use strict';

  //Check for login

  var isLoggedIn = Cookies.get('access_token');

  window.isLoggedIn = isLoggedIn;

  var greeting = function(){
    if (isLoggedIn !== undefined){
      return "Welcome, " + userName + "!";
    }
    else{
      return "You must log in to play!";
    }
  };

  window.greeting = greeting;

  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();
  var allGuesses = new app.Collections.Guesses();

  allPosts.fetch().done(function() {

    app.mainRouter = new app.Routers.MainRouter({
      usersCollection: allUsers,
      postsCollection: allPosts,
      guessesCollection: allGuesses
    });

  Backbone.history.start();

  });

}());
