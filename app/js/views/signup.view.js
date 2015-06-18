;(function (){

  'use strict';


  app.Views.SignUpView = Backbone.View.extend({

    className: 'signUp',

    template: hbs.signup,

    events: {
      'click #signup' : 'signUp',
    },



  initialize: function (options) {

    var args = options || {};

    this.collection = args.collection;

    this.render();
    $('.container').html(this.el);
  },


  render: function(){

    this.$el.html(this.template);

  },



  addUser: function (event) {

    event.preventDefault();

    // Grabs values from form inputs

    var form = $(event.target),
        firstName = form.find('#firstName').val(),
        lastName = form.find('#lastName').val(),
        userName = form.find('#userName').val(),
        email = form.find('#email').val(),
        password = form.find('#password').val(),
        confirm = form.find('#confirmPassword').val()
    }

    // Creates new user instance

    var u = new app.Models.User({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
      });

    // Adds instance of user to collection

    if (password == confirm) {

       this.collection.add(u).save().success(function(data){
          Cookies.set('access_token', data.access_token);
          Cookies.set('username', data.username);

       });

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
