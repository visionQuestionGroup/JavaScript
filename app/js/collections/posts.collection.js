;(function (){

    'use strict';
    // Initial posts collections

  console.log('this is my posts collection');


    app.Collections.Posts = Backbone.Collection.extend({

      model: app.Models.Post,

      url: 'http://tiy-515.herokuapp.com/collections/joyave_image_dummy'

    /*
    comparator: '',

    url: 'https://vast-wildwood-6662.herokuapp.com//posts/all'
    */

  });





}());
