;(function (){

  'use strict';

  //Check for login

  window.isLoggedIn = Cookies.get('access_token');


  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();
  var allGuesses = new app.Collections.Guesses();
  var scoreboard = new app.Collections.Scoreboard();

  allPosts.fetch().done(function() {

    app.mainRouter = new app.Routers.MainRouter({
      usersCollection: allUsers,
      postsCollection: allPosts,
      guessesCollection: allGuesses
    });

  Backbone.history.start();

  });

}());
