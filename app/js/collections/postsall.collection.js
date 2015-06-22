;(function (){

  'use strict';

    app.Collections.PostsAll = Backbone.Collection.extend({

      model: app.Models.PostAll,

      url: app.rootURL + 'posts/all'

  });

}());
