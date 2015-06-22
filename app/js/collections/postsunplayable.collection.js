;(function (){

  'use strict';

    app.Collections.PostsUnplayable = Backbone.Collection.extend({

      model: app.Models.PostUnplayable,

      url: app.rootURL + 'posts/all/unplayable'

  });

}());
