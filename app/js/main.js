;(function (){

  'use strict';

  //Check for login

  var isLoggedIn = Cookies.get('access_token');

  if ( isLoggedIn !== undefined ){
    console.log('Yep, logged in');
   } else {
    console.log('Nope, not logged in');
   }

  // var allGuesses = new app.Collections.Guesses();
  // var allPosts = new app.Collections.Posts();



  // allPosts.fetch().done( function () {

  app.mainRouter = new app.Routers.MainRouter({
      // collection: allPosts
  });

  Backbone.history.start();

  // });

}());
