;(function() {

    'use strict';

    app.Views.NavView = Backbone.View.extend({

        className: 'nav',

        template: hbs.nav,

        events: {
            'click #signIn': 'signIn',
        },

        initialize: function(options) {

            var args = options || {};

            this.render();

            $('#nav').html(this.el);

        },


        render: function() {
          var renderedTemplate = this.template({
            greeting: greeting
          });
          this.$el.html(renderedTemplate);
        },


        signIn: function(event) {


            event.preventDefault();


            var url = 'https://vast-wildwood-6662.herokuapp.com/users/login/';

            var form = $(event.target),
                userName = $('#user').val(),
                password = $('#pw').val();

            var signInfo = {
                "user_name": userName,
                "password": password
            }

            console.log(signInfo);

            $.ajax({
                url: url,
                type: 'POST',
                dataType: "json",
                data: signInfo,
                success: function(data) {
                    Cookies.set('access_token', data.access_token);
                    Cookies.set('username', data.username);
                }
            });

        }
    });
}());
