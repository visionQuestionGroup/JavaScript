;(function() {

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};

      this.usersCollection = args.usersCollection;
      this.postsplayableCollection = args.postsplayableCollection;
      this.postsunplayableCollection = args.postsunplayableCollection;
      this.guessesCollection = args.guessesCollection;
      this.scoreboardCollection = args.scoreboardCollection;

    },

    routes: {
      '': 'homePage',
      'unplayable': 'unplayable',
      'visionQuestion/:id': 'viewQuestion',
      'scoreboard': 'scoreboard',
      'signup': 'signUp',
      '*path': 'errorPage'
    },

    homePage: function() {
      new app.Views.Main({
        postsplayableCollection: this.postsplayableCollection,
        usersCollection: this.usersCollection
      });
      new app.Views.NavView({});
    },

    unplayable: function() {
      new app.Views.PostsUnplayable({
        postsunplayableCollection: this.postsunplayableCollection,
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
        postsplayableCollection: this.postsplayableCollection
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
