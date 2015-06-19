;(function (){

  'use strict';


  app.Views.SignUpView = Backbone.View.extend({

    className: 'signUp',

    template: hbs.signup,

    events: {
      'submit #signup' : 'addUser',
    },



    initialize: function (options) {

      var args = options || {};

      this.render();

      $('.container').html(this.el);
    },


    render: function(){

      this.$el.html(this.template);

    },



    addUser: function (event) {

      event.preventDefault();

      console.log(this);

      // Grabs values from form inputs

      if (password == confirm) {

        var form = $(event.target),
            firstName = form.find('#firstName').val(),
            lastName = form.find('#lastName').val(),
            userName = form.find('#userName').val(),
            email = form.find('#email').val(),
            password = form.find('#password').val(),
            confirm = form.find('#confirmPassword').val();

      // Creates new user instance

        var u = new app.Models.User({
            first_name: firstName,
            last_name: lastName,
            user_name: userName,
            email: email,
            password: password,
        });

      // Adds instance of user to collection database

        var signUp = new app.Collections.Users();

        signUp.add(u).save().success(function(data){
            $('#successMsg').append('<h3>Congrats, you set up an account!</h3>');
            Cookies.set('access_token', data.access_token);
            Cookies.set('username', data.username);
        });

      $('#signup')[0].reset();

      }
    }
  });


}());



/*
// Checked for Login

var isLoggedIn = Cookies.get('access_token');
if (isLoggedIn !== undefined) {
  console.log('Yep, logged in');
} else {
  console.log('Nope, not logged in');
}



$('#addUser').on('submit', function(e) {
  e.preventDefault();

  var user = {
    username: $('#userName').val(),
    email: $('#userEmail').val(),
    password: $('#userPass').val()
  };

  var userInstance = new app.Models.User(user);

  allUsers.add(userInstance).save().success(function(data) {

    Cookies.set('access_token', data.access_token);
    Cookies.set('username', data.username);
  });

});

*/
