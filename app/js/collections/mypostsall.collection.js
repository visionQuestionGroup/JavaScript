;(function (){

  'use strict';

    app.Collections.MyPostsAll = Backbone.Collection.extend({

      model: app.Models.MyPostAll,

      url: app.rootURL + 'posts/user'

  });

}());
