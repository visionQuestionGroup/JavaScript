;(function (){

  'use strict';

    app.Collections.MyPostsNotSolved = Backbone.Collection.extend({

      model: app.Models.MyPostNotSolved,

      url: app.rootURL + 'posts/user/notsolved'

  });

}());
