;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.usersCollection = args.usersCollection;
      this.postsCollection = args.postsCollection;
      this.guessesCollection = args.guessesCollection;

    },

    routes: {
      '' : 'homePage',
      'visionQuestion/:id' : 'viewQuestion',
      'scoreboard' : 'scoreboard',
      'signup' : 'signUp',
      // 'edit/:id' : 'editQuest',
      '*path' : 'errorPage'
    },

    homePage: function () {
      new app.Views.Main({
        postsCollection: this.postsCollection,
        usersCollection: this.usersCollection
      });
      console.log(' created');
      new app.Views.NavView({
      });
    },

    signUp: function () {
      new app.Views.SignUpView({
        collection: this.collection
      });
      new app.Views.NavView({
      });

    },
    scoreboard: function () {
      new app.Views.Scoreboard({
        collection: this.collection
      });
    },

    errorPage: function () {
      $('.container').html('404 Not Found');
    }

  });

}());
