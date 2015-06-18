;( function (){

    "use strict";

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addBookmark' : 'addBookmark'
    },

    template: hbs.main,

    initialize: function (options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function () {
      this.$el.html(this.template);
    },

    addBookmark: function (event) {

      event.preventDefault();

      // Grab our form and form values
      var self = this,
          form = $(event.target),
          title = form.find('#bookmarkTitle').val(),
          url = form.find('#bookmarkURL').val();

      // Create a Instance
      var b = new app.Models.Bookmark({
        url: url,
        title: title
      });

      // Add instance to our
      this.collection.add(b).save().success( function () {
        self.render();
      });

    }

  });

}());

}());
