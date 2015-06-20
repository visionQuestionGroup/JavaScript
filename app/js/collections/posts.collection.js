;(function (){

  'use strict';

    app.Collections.Posts = Backbone.Collection.extend({

      model: app.Models.Post,

      url: app.rootURL + 'posts/all'

  });

}());
