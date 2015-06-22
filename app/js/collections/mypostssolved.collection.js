;(function (){

  'use strict';

    app.Collections.MyPostsSolved = Backbone.Collection.extend({

      model: app.Models.MyPostSolved,

      url: app.rootURL + 'posts/user/solved'

  });

}());
