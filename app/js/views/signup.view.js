;(function (){

  'use strict';


  app.Views.SignUpeView = Backbone.View.extend({

    className: 'signup',

    template: hbs.signup,

    events: {
      'click #signup' : 'signup',
    },

    initialize: function (options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function(){

      this.$el.html(this.template({ signup: this.collection.toJSON() }));

    },

    addUser: function (event) {

      event.preventDefault();


    });





  }());
