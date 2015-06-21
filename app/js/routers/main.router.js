;(function() {

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};

      this.usersCollection = args.usersCollection;
      this.postsCollection = args.postsCollection;
      this.guessesCollection = args.guessesCollection;
      this.scoreboardCollection = args.scoreboardCollection;

    },

    routes: {
      '': 'homePage',
      'visionQuestion/:id': 'viewQuestion',
      'scoreboard': 'scoreboard',
      'newQuest': 'newQuest',
      'signup': 'signUp',
      // 'edit/:id' : 'editQuest',
      '*path': 'errorPage'
    },

    homePage: function() {
      new app.Views.Main({
        postsCollection: this.postsCollection,
        usersCollection: this.usersCollection
      });
      new app.Views.NavView({});
    },

    signUp: function() {
      new app.Views.SignUpView({});
      new app.Views.NavView({});
    },

    viewQuestion: function(id) {
      console.log('entering viewQuestion function');
      new app.Views.ViewQuestion({
        postId: id,
        postsCollection: this.postsCollection
      });
      new app.Views.NavView({});
    },

    scoreboard: function(username) {
      new app.Views.Scoreboard({
        scoreboardCollection: this.scoreboardCollection
      });
      new app.Views.NavView({});
    },

    errorPage: function() {
      $('.container').html('404 Not Found');
    }

  });

}());
