;(function (){

  'use strict';

  var allUsers = new app.Collections.Users();
  // var allGuesses = new app.Collections.Guesses();
  // var allPosts = new app.Collections.Posts();



  // allPosts.fetch().done( function () {

  app.mainRouter = new app.Routers.MainRouter({
      // collection: allPosts
    });

  Backbone.history.start();

  // });

}());
