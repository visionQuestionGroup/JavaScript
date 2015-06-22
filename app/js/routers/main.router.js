;(function() {

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};

      this.usersCollection = args.usersCollection;
      this.postsplayableCollection = args.postsplayableCollection;
      this.postsunplayableCollection = args.postsunplayableCollection;
      this.mypostsallCollection = args.mypostsallCollection;
      this.mypostssolvedCollection = args.mypostssolvedCollection;
      this.mypostsnotsolvedCollection = args.mypostsnotsolvedCollection;
      this.guessesCollection = args.guessesCollection;
      this.scoreboardCollection = args.scoreboardCollection;

    },

    routes: {
      '': 'homePage', //playable posts
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

    mypostsall: function() {
      new app.Views.MyPostsAll({
        mypostsallCollection: this.mypostsallCollection,
      });
      new app.Views.NavView({});
    },

    mypostssolved: function() {
      new app.Views.MyPostsSolved({
        mypostssolvedCollection: this.mypostssolvedCollection,
      });
      new app.Views.NavView({});
    },

    mypostsnotsolved: function() {
      new app.Views.MyPostsNotSolved({
        mypostsnotsolvedCollection: this.mypostsnotsolvedCollection,
      });
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
