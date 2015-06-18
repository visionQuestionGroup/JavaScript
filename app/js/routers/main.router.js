;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      this.collection = options.collection;

    },

  routes: {
      '' : 'homePage',
      'visionQuestion/:id' : 'viewQuestion',
      'scoreboard' : 'scoreboard',
      'newQuest' : 'newQuest',
      'signup' : 'signUp',
      // 'edit/:id' : 'editQuest',
      '*path' : 'errorPage'
  },

    signUp: function () {
      new app.Views.SignUpView();
    },

    errorPage: function () {
      $('.container').html('404 Not Found');
    }

    });


  }());
