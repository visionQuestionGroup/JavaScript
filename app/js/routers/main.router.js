;
(function() {

    'use strict';

    app.Routers.MainRouter = Backbone.Router.extend({

        initialize: function(options) {

            this.collection = options.collection;

        },

        routes: {
            '': 'homePage',
            'visionQuestion/:id': 'viewQuestion',
            'scoreboard': 'scoreboard',
            'newQuest': 'newQuest',
            'signup': 'signUp',
            // 'edit/:id' : 'editQuest',
            '*path': 'errorPage'
        },

        homePage: function() {
            new app.Views.Main({
                collection: this.collection
            });
            new app.Views.NavView({});
        },

        signUp: function() {
            new app.Views.SignUpView({});
            new app.Views.NavView({});
        },
        scoreboard: function() {
            new app.Views.Scoreboard({
                collection: this.collection
            });
            new app.Views.NavView({});
        },

        errorPage: function() {
            $('.container').html('404 Not Found');
        }

    });


}());
