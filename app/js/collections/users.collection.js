;(function (){

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'username',

    url: 'http://tiy-515.herokuapp.com/collections/nicktest'

  });

}());
