;(function () {

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addPost'   : 'addPost'
    },

    template: hbs.main,

    initialize: function(options) {
      var args = options || {};
      this.postsCollection = args.postsCollection;

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      this.$el.html(this.template({post: this.postsCollection.toJSON()}));
    },

    addPost: function(event) {
      event.preventDefault();

      // Get form and form values
      // var that = this,
      var form = $(event.target),
          image_url = form.find('#photoURL').val(),
          answer = form.find('#answer').val();

      // Create post instance

      // var postInstance = new app.Models.Post({
      //   image_url: image_url,
      //   answer: answer,
      // });

      var postInstance = {
        image_url: image_url,
        answer: answer,
      }

      console.log(postInstance);
      console.log(this)

      // Add instance to collection and save to database
      // this.postsCollection.add(postInstance).save({url: app.RootUrl + 'posts/new'}).success(function() {
      //   that.render();
      // })

      $.ajax({
          url: 'https://vast-wildwood-6662.herokuapp.com/posts/new',
          type: 'POST',
          dataType: "json",
          data: postInstance,
          success: function() {
            // that.render();
            // $('#addPost')[0].reset();
            document.location.reload();
                }
            });
    }

  });

}());
