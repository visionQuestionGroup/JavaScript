;(function (){

  'use strict';

  app.Models.User = Backbone.Model.extend({

    idAttribute: '_id', // Because of our use of MongoDB,

    defaults:  {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }


  });

}());
