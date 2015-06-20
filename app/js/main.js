;(function (){

  'use strict';

  /////////////////////////// Check for login ///////////////////////////

  var isLoggedIn = Cookies.get('access_token');

  window.isLoggedIn = isLoggedIn;

  var greeting = function(){
    if (isLoggedIn !== undefined){
      return "Welcome, user!";
    }
    else{
      return "You must log in to play!";
    }
  };

  window.greeting = greeting;


   // allPosts.fetch().done( function () {

 app.mainRouter = new app.Routers.MainRouter({
     // collection: allPosts
 });

 Backbone.history.start();

 // });


  /////////////////////////// Create new instance of Users collection ///////////////////////////

  var allUsers = new app.Collections.Users();


  // allUsers.fetch().done(function(){

  //   new app.Routers.MainRouter({
  //     collection: allUsers
  //   });
  //   Backbone.history.start();

  // });

  /////////////////////////// Create new instance of Posts collection ///////////////////////////

  var allPosts = new app.Collections.Posts();

  // allPosts.fetch().done(function(){

  //   new app.Routers.MainRouter({
  //     collection: allPosts,
  //   });
  //   Backbone.history.start();

  // });

  /////////////////////////// Create new instance of Guesses collection ///////////////////////////

  var allGuesses = new app.Collections.Guesses();

  // allGuesses.fetch().done(function(){

  //   new app.Routers.MainRouter({
  //     collection: allGuesses
  //   });
  //   Backbone.history.start();

  // });

}());
