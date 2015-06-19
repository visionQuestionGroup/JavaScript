;(function (){

  'use strict';

  app.Models.User = Backbone.Model.extend({






    defaults:  {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }


  });

}());
