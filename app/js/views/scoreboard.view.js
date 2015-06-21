;(function (){

    "use strict";

  app.Views.Scoreboard = Backbone.View.extend({

    className: 'scoreboard',

    template: hbs.scoreboard,

    initialize: function (options) {

      var args = options || {};
      this.scoreboardCollection = args.scoreboardCollection;
      this.scoreboardCollection.fetch().done();
      console.log(this.scoreboardCollection);
      this.userName = args.userName;

      this.render();
      $('.container').html(this.el);
    },

    render: function () {
      console.log('inside render function of scoreboard view');

      // this.scoreboardCollection.fetch().done(function() {
        var singleUser = this.scoreboardCollection.get(this.postId);
        this.$el.html(this.template(singleUser.toJSON()));
      // }.bind(this));

    }

  });

}());
