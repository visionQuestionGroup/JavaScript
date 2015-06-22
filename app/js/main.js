;(function (){

  'use strict';

  //Check for login

  window.isLoggedIn = Cookies.get('access_token');


  var allUsers = new app.Collections.Users();
  var allPostsPlayable = new app.Collections.PostsPlayable();
  var allPostsUnplayable = new app.Collections.PostsUnplayable();
  var myPostsAll = new app.Collections.MyPostsAll();
  var myPostsSolved = new app.Collections.MyPostsSolved();
  var myPostsNotSolved = new app.Collections.MyPostsNotSolved();
  var allGuesses = new app.Collections.Guesses();
  var scoreboard = new app.Collections.Scoreboard();

  allPostsPlayable.fetch().done(function() {

    app.mainRouter = new app.Routers.MainRouter({
      usersCollection: allUsers,
      postsplayableCollection: allPostsPlayable,
      postsunplayableCollection: allPostsUnplayable,
      mypostsallCollection: myPostsAll,
      mypostssolvedCollection: myPostsSolved,
      mypostsnotsolvedCollection: myPostsNotSolved,
      guessesCollection: allGuesses
    });

  Backbone.history.start();

  });

}());
