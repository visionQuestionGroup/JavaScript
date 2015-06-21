;(function() {

    'use strict';

    app.Views.NavView = Backbone.View.extend({

        className: 'nav',

        template: hbs.nav,

        events: {
            'click #signIn': 'signIn',
            'click #signOutBtn' : 'signOut'
        },


        initialize: function(options) {

            var args = options || {};

            this.render();

            $('#nav').html(this.el);

            $.ajax({
              url: 'https://vast-wildwood-6662.herokuapp.com/posts/user',
              type: 'GET',
              dataType: "json",
              success: function(data) {
                var name = data[0].creator.first_name;
                $('#greetName').html(name);
                }
              });
        },


        render: function() {

          var renderedTemplate = this.template({
            // greeting: userGreet(),
            isLoggedIn: isLoggedIn
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
            console.log(this);

            $.ajax({
                url: url,
                type: 'POST',
                dataType: "json",
                data: signInfo,
                success: function(data) {
                    Cookies.set('access_token', data.access_token);
                    Cookies.set('username', data.username);
                    $('.signIn')[0].reset();
                    document.location.reload();
                }
            });

        },


        signOut: function(event) {

            event.preventDefault();

            Cookies.expire('access_token');
            Cookies.expire('username');

            document.location.reload();
        },



    });
}());
