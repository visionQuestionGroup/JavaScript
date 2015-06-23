;(function (){

  'use strict';

  //Check for login


  console.log(isLoggedIn);

  var allUsers = new app.Collections.Users();
  var allPostsPlayable = new app.Collections.PostsPlayable();
  var allGuesses = new app.Collections.Guesses();

  if (isLoggedIn !== 0){
    allPostsPlayable.fetch().done(function() {

      app.mainRouter = new app.Routers.MainRouter({
        usersCollection: allUsers,
        postsplayableCollection: allPostsPlayable,
        guessesCollection: allGuesses
      });

    });
  } else {
       app.mainRouter = new app.Routers.MainRouter({
        usersCollection: allUsers,
        postsplayableCollection: allPostsPlayable,
        guessesCollection: allGuesses
      });
  }

  Backbone.history.start();



}());
