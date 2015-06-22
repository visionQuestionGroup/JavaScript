;(function () {

  'use strict';

  app.Views.ViewQuestion = Backbone.View.extend({

    className: 'viewQuestion',

    template: hbs.viewquestion,

    events: {
      // 'click #delete': 'deletePhoto'
    },

    initialize: function(options) {
      var args = options || {};
      this.postId = args.postId;
      this.postsplayableCollection = args.postsplayableCollection;

      this.render();
      $('.container').html(this.el);
    },

    render: function() {
      var singlePost = this.postsplayableCollection.get(this.postId);
      this.$el.html(this.template(singlePost.toJSON()));
    }
  });

}());
