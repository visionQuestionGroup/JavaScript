;(function (){

  'use strict';

  // var allGuesses = new app.Collections.Guesses();
  // var allPosts = new app.Collections.Posts();



  // allPosts.fetch().done( function () {

  app.mainRouter = new app.Routers.MainRouter({
      // collection: allPosts
    });

  Backbone.history.start();

  // });

}());
