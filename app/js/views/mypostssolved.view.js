;(function () {

  'use strict';

  var myPostsSolved = new app.Collections.MyPostsSolved();

  // myPostsSolved.fetch();


  app.Views.MyPostsSolved = Backbone.View.extend({

    className: 'mypostssolved',

    events: {
      'submit #addPost'   : 'addPost'
    },

    template: hbs.mypostssolved,

    initialize: function() {

      this.collection = myPostsSolved;

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
