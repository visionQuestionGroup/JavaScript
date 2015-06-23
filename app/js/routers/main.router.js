;(function() {

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};

      this.usersCollection = args.usersCollection;
      this.postsplayableCollection = args.postsplayableCollection;
      this.guessesCollection = args.guessesCollection;

    },

    routes: {
      '': 'homePage',
      'playable': 'playable',
      'unplayable': 'unplayable',
      'allmyposts': 'mypostsall',
      'mypostssolved': 'mypostssolved',
      'mypostsnotsolved': 'mypostsnotsolved',
      'visionQuestion/:id': 'viewQuestion',
      'scoreboard': 'scoreboard',
      'signup': 'signUp',
      '*path': 'errorPage'
    },

    homePage: function() {
      new app.Views.Main({});
      new app.Views.NavView({});
    },

    playable: function() {
      new app.Views.PostsPlayable ({
        postsplayableCollection: this.postsplayableCollection
      });
      new app.Views.NavView({});
    },

    unplayable: function() {
      new app.Views.PostsUnplayable({});
      new app.Views.NavView({});
    },

    mypostsall: function() {
      new app.Views.MyPostsAll({});
      new app.Views.NavView({});
    },

    mypostssolved: function() {
      new app.Views.MyPostsSolved({});
      new app.Views.NavView({});
    },

    mypostsnotsolved: function() {
      new app.Views.MyPostsNotSolved({});
      new app.Views.NavView({});
    },

    signUp: function() {
      new app.Views.SignUpView({});
      new app.Views.NavView({});
    },

    viewQuestion: function(id) {
      new app.Views.ViewQuestion({
        postId: id,
        postsplayableCollection: this.postsplayableCollection
      });
      new app.Views.NavView({});
    },

    scoreboard: function(username) {
      new app.Views.Scoreboard({});
      new app.Views.NavView({});
    },

    errorPage: function() {
      $('.container').html('404 Not Found');
    }

  });

}());
