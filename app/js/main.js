;(function (){

  'use strict';

  //Check for login

  window.isLoggedIn = Cookies.get('access_token');


  var allUsers = new app.Collections.Users();
  var allPostsPlayable = new app.Collections.PostsPlayable();
  var allGuesses = new app.Collections.Guesses();
  var scoreboard = new app.Collections.Scoreboard();

  allPostsPlayable.fetch().done(function() {

    app.mainRouter = new app.Routers.MainRouter({
      usersCollection: allUsers,
      postsplayableCollection: allPostsPlayable,
      guessesCollection: allGuesses
    });

  Backbone.history.start();

  });

}());
