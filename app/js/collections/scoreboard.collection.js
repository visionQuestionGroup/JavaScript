;( function (){

    "use strict";

    app.Collections.Scoreboard = Backbone.Collection.extend({

    model: app.Models.Scoreboard,

    url: app.rootURL + 'topscores'

});
}());
