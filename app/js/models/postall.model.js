;( function (){

    'use strict';

    app.Models.PostAll = Backbone.Model.extend({

    defaults:  {
      id: '',
      user_name: '',
      image_url: '',
      answer: ''
    }

  });

}());
