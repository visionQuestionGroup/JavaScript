;( function (){

    "use strict";
// initial setup of guesses collection

  app.Collections.Guesses = Backbone.Collection.extend({

    model: app.Models.Guess,

    url: app.rootURL + 'guesses'

  });

}());
