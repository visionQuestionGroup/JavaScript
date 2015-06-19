;(function (){

  'use strict';

  app.Models.User = Backbone.Model.extend({

    idAttribute: '_id',

    defaults:  {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }


  });

}());
