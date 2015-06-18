;(function (){

  'use strict';


  app.Views.SignUpView = Backbone.View.extend({

    className: 'signUp',

    template: hbs.signup,

    events: {
      'click #signup' : 'signUp',
    },

  initialize: function (options) {

    var args = options || {};

    this.collection = args.collection;

    this.render();
    $('.container').html(this.el);
  },

  render: function(){

    this.$el.html(this.template);

  },

  addUser: function (event) {

    event.preventDefault();
  }

  });





  }());
