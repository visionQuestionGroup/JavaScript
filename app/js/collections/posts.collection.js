;( function (){

    "use strict";
    // Initial posts collections

    app.Collections.Posts = Backbone.Collection.extend({

    model: app.Models.Post,

    // comparator: '',

    url: 'https://vast-wildwood-6662.herokuapp.com/users/register'

  });




}());
