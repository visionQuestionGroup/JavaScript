;(function (){

  'use strict';

    app.Collections.PostsPlayable = Backbone.Collection.extend({

      model: app.Models.PostPlayable,

      url: app.rootURL + 'posts/all/playable'

  });

}());
