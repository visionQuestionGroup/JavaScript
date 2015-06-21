;(function (){

    "use strict";
      var allScores = new app.Collections.Scoreboard();

       allScores.fetch();

  app.Views.Scoreboard = Backbone.View.extend({


    className: 'scoreboard',

    template: hbs.scoreboard,

    initialize: function (options) {

      var args = options || {};

      this.collection = allScores;

      this.render();
      $('.container').html(this.el);
    },

    render: function () {


      // var scoresRes = this.collection.get(this./topscores);

      this.$el.html(this.template({users: this.collection.toJSON()}));
    }


      });

}());
