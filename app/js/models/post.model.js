;( function (){

    'use strict';

    app.Models.Post = Backbone.Model.extend({

    defaults:  {
      id: '',
      user_name: '',
      image_url: '',
      answer: ''
    }

  });

}());
