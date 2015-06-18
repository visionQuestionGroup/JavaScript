;( function (){

    "use strict";
    // post setup

    app.Models.Post = Backbone.Model.extend({

    idAttribute: '_id',

    defaults:  {
      url: '',
      username: '',

    }


  });


}());
