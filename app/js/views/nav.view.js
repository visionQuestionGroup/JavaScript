;
(function() {

    'use strict';

    app.Views.NavView = Backbone.View.extend({

        className: 'nav',

        template: hbs.nav,

        events: {
            'click #signIn': 'signIn',
            'click #signOut' : 'signOut'
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
                    console.log($('#user'));
                    $('#signIn')[0].reset();
                    document.location.reload();
                }
            });

        },


        signOut: function(event) {

            event.preventDefault();

            Cookies.expire('access_token');
            Cookies.expire('username');

            document.location.reload();
        }
    });
}());
