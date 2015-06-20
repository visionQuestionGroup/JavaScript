;(function (){

  'use strict';

  //Check for login

  var isLoggedIn = Cookies.get('access_token');

  if ( isLoggedIn !== undefined ){
    console.log('Yep, logged in');
   } else {
    console.log('Nope, not logged in');
   }

  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();
  var allGuesses = new app.Collections.Guesses();

  allPosts.fetch().done( function() {

    app.mainRouter = new app.Routers.MainRouter({
      usersCollection: allUsers,
      postsCollection: allPosts,
      guessesCollection: allGuesses
    });
    Backbone.history.start();

  });

}());
