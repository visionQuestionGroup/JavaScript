;( function (){

    "use strict";

    app.Collections.Scoreboard = Backbone.Collection.extend({

    // model: app.Models.,


    url: app.rootURL + 'topscores'

    url: 'https://vast-wildwood-6662.herokuapp.com/users/topscores'



}());
