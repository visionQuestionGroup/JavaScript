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
