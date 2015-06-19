;(function (){

  'use strict';

  /////////////////////////// Check for login ///////////////////////////

  var isLoggedIn = Cookies.get('access_token');

  if ( isLoggedIn !== undefined ){
    console.log('Yep, logged in');
   } else {
    console.log('Nope, not logged in');
   }

  /////////////////////////// Create new instance of Users collection ///////////////////////////

  var allUsers = new app.Collections.Users();

  allUsers.fetch().done(function(){

    new app.Routers.MainRouter({
      collection: allUsers
    });
    Backbone.history.start();

  });

  /////////////////////////// Create new instance of Posts collection ///////////////////////////

  var allPosts = new app.Collections.Posts();

  allPosts.fetch().done(function(){

    new app.Routers.MainRouter({
      collection: allPosts,
    });
    Backbone.history.start();

  });

  /////////////////////////// Create new instance of Guesses collection ///////////////////////////

  var allGuesses = new app.Collections.Guesses();

  allGuesses.fetch().done(function(){

    new app.Routers.MainRouter({
      collection: allGuesses
    });
    Backbone.history.start();

  });

}());
