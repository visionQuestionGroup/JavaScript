;(function (){

    "use strict";

  app.Views.Scoreboard = Backbone.View.extend({


    className: 'scoreboard',

    template: hbs.scoreboard,

    initialize: function (options) {

      var args = options || {};



      this.render();
      $('.container').html(this.el);
    },

    render: function () {
      this.$el.html(this.template);

      // var scoresRes = this.collection.get(this./topscores);

      // this.$el.html(this.template({user: this.collectionUsers.topscores.toJSON()}));
    }


      });

}());
