;(function (){

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'username',

    url: app.rootURL + 'users'

  });

}());
