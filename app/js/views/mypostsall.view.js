;(function () {

  'use strict';

  var myPostsAll = new app.Collections.MyPostsAll();

  if (isLoggedIn !== 0) {
    // myPostsAll.fetch();
  };

  app.Views.MyPostsAll = Backbone.View.extend({

    className: 'mypostsall',

    events: {
      'submit #addPost'   : 'addPost'
    },

    template: hbs.mypostsall,

    initialize: function() {

      this.collection = myPostsAll;

      this.render();
      $('.container').html(this.el);
    },

    render: function(sortBy) {
      this.$el.html(this.template({post: this.collection.toJSON()}));
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
            document.location.reload();
          }
      });
    }

  });

}());
