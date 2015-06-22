;(function () {

  'use strict';

  app.Views.PostsPlayable = Backbone.View.extend({

    className: 'postsplayable',

    events: {
      'submit #addPost'   : 'addPost'
    },

    template: hbs.postsplayable,

    initialize: function(options) {

      var args = options || {};

      this.postsplayableCollection = args.postsplayableCollection;

      this.render();
      $('.container').html(this.el);
    },

    render: function(sortBy) {
      this.$el.html(this.template({post: this.postsplayableCollection.toJSON()}));
    },

    addPost: function(event) {
      event.preventDefault();

      // Get form and form values
      var form = $(event.target),
          image_url = form.find('#photoURL').val(),
          answer = form.find('#answer').val();

      // Create post instance

      var postInstance = {
        image_url: image_url,
        answer: answer,
      }


      // Add instance to collection and save to database
      $.ajax({
          url: app.rootURL +'posts/new',
          type: 'POST',
          dataType: "json",
          data: postInstance,
          success: function() {

            that.render();
            $('#addPost')[0].reset();

            document.location.reload();
          }
      });
    }

  });

}());
