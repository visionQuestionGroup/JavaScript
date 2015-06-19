;(function () {

  'use strict';

  app.Views.NavView = Backbone.View.extend({

    className: 'nav',

    template: hbs.nav,

  initialize: function (options) {

    var args = options || {};

    this.render();

    $('#nav').html(this.el);
  },

  render: function(){

    this.$el.html(this.template);

  }

  });

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    // events: {
    //   'submit #addPost'    : 'addPost'
    // },

    template: hbs.main,

    initialize: function(options) {
      var args = options || {};
      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      this.$el.html(this.template({post: this.collection.toJSON()}));
    },

    addPost: function(event) {
      event.preventDefault();

      // Get form and form values
      var that = this,
          form = $(event.target),
          imgUrl = form.find('#imgUrl').val(),
          answer = form.find('#answer').val();

      // Create post instance
      var p = new app.Models.Post({
        imgUrl: imgUrl,
        answer: answer,
      });

      // Add instance to collection and save to database
      this.collection.add(p).save().success(function() {
        that.render();
      })
    }

  });

}());

// $('.accordion').on ('click', function(){
//   $('.accordion').removeClass('thissection');
//   $(this).addClass('thissection');
// });
