;(function (){

  'use strict';

  console.log('this is my users collection');

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'username',

    url: 'http://tiy-515.herokuapp.com/collections/nicktest'

    // url: 'https://vast-wildwood-6662.herokuapp.com/users/register'


  });

}());
