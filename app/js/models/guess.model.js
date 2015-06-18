;( function (){

    "use strict";
    // Initial setup guess models

    app.Models.Guess = Backbone.Model.extend({

    idAttribute: '_id',

    defaults:  {
      url: '',
      username: '',
      guess: '',
    }


  });





}());


