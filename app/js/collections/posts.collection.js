;(function (){

  'use strict';

  console.log('this is my posts collection');


    app.Collections.Posts = Backbone.Collection.extend({

      model: app.Models.Post,

      url: app.rootURL + 'posts/all'

  });

}());
