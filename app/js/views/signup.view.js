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
