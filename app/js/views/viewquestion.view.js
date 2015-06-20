;(function () {

  'use strict';

  console.log('we are in ViewQuestion view');

  app.Views.ViewQuestion = Backbone.View.extend({

    className: 'viewQuestion',

    template: hbs.viewquestion,

    events: {
      // 'click #delete': 'deletePhoto'
    },

    initialize: function(options) {
      var args = options || {};
      this.postId = args.postId;
      this.postsCollection = args.postsCollection;

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      var singlePost = this.collection.get(this.postId);
      this.$el.html(this.template(singlePost.toJSON()));
    }
  });

}());
