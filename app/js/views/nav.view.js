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

            this.greetUser();

            this.displayScore();
        },


        render: function() {

          var renderedTemplate = this.template({
            greeting: this.greetUser(),
            isLoggedIn: isLoggedIn
          });
          this.$el.html(renderedTemplate);
        },


        signIn: function(event) {


            event.preventDefault();


            var url = app.rootURL + 'users/login/';

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

        greetUser: function() {
          if (isLoggedIn !== 0){
            $.ajax({
              url: app.rootURL + 'user',
              type: 'GET',
              dataType: "json",
              success: function(data) {
                var name = data.first_name;
                $('#greetName').html(name);
                }
              });
          }

        },

        displayScore: function() {
          if (isLoggedIn !== 0){
            $.ajax({
              url: app.rootURL + 'user/score',
              type: 'GET',
              dataType: "json",
              success: function(data) {
                var score = data.score;
                $('#score').html(score);
              }
            });
          }

        }
    });
}());
