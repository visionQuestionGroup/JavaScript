;(function () {

  'use strict';

   // Globals
    window.app = {};
    window.app.Models = {};
    window.app.Collections = {};
    window.app.Views = {};
    window.app.Routers = {};

    window.isLoggedIn = 0;

    if (Cookies.get('access_token') !== undefined) {
      window.isLoggedIn = Cookies.get('access_token');
    }

  app.rootURL = 'https://vast-wildwood-6662.herokuapp.com/';

  // For auth token
  $.ajaxSetup({

    headers: {
      'Access-Token' : Cookies.get('access_token')
    }

  });

}());
