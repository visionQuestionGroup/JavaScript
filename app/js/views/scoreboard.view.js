;( function (){

    "use strict";


  app.Views.NavView = Backbone.View.extend({

    className: 'nav',

    template: hbs.nav,

    initialize: function (options) {

      var args = options || {};

      this.render();

      $('#nav').html(this.el);
      },

      render: function(){

      this.$el.html(this.template);

    }

  });



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

      // var scoresRes = this.collection.get(this.??Id);

      // this.$el.html(this.template(??.toJSON()));
    },


      });

}());
