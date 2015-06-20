;( function (){

    "use strict";
    // post setup

    console.log('this is my post model');

    app.Models.Post = Backbone.Model.extend({

    // idAttribute: '_id',

    defaults:  {
      username: '',
      image_url: '',
      image_name: '',
      _id: ''
    }


  });


}());
