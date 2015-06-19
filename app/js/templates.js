this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <section class=\"accordion thissection\">\n        <header id=\"head3\">Section Three</header>\n\n        <p id=\"para3\">How to play.</p>\n      </section>\n\n      <section class=\"accordion\">\n        <header id=\"head2\">Section Two</header>\n\n        <form id=\"addPhoto\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Photo Title\" id=\"photoTitle\">\n          <input type=\"text\" placeholder=\"Photo Description\" id=\"photoDesc\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form>\n      </section>\n    </div>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n  <label>Contact Category:\n    <select id=\"contactCat\">\n      <option value=\"family\">Family</option>\n      <option value=\"friends\">Friends</option>\n      <option value=\"coworkers\">Work Colleagues</option>\n      <option value=\"business\">Professional Contacts</option>\n    </select> <!-- end contactCat -->\n  </label>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"small-12 medium-6 large-4 columns\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n  </div>\n  <div class=\"small-12 medium-6 large-4 columns\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n  </div>\n  <div class=\"small-12 medium-6 large-4 columns\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n  </div>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<ul class=\"title-area\">\n  <li class=\"name\">\n    <h1><a href=\"#\">visionQuestion</a></h1>\n  </li>\n</ul>\n\n<section class=\"top-bar-section\">\n  <!-- Right Nav Section -->\n  <ul class=\"right\">\n\n    <li class=\"active\">\n\n    </li>\n\n    <li class=\"has-dropdown\">\n      <a href=\"#\">User Menu</a>\n      <ul class=\"dropdown\">\n        <li>\n          <form id=\"logIn\">\n            <label>\n              <input type=\"text\" id=\"userName\" placeholder=\"username\">Username\n            </label>\n            <label>\n              <input type=\"password\" id=\"userPassword\" placeholder=\"password\">Password\n            </label>\n            <a href=\"#\" class=\"button info radius\">Log In</a>\n          </form>\n        </li>\n        <li class=\"active\"><a href=\"#\">Scoreboard</a></li>\n      </ul>\n    </li>\n  </ul>\n</section>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["scoreboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"score\">\n\n<ul>\n  <li>\n    <span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span>\n    <span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span>\n  </li>\n</ul>\n\n\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["signup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<form id=\"signup\">\n  <div class=\"signupForm large-4 large-centered columns\">\n    <h2>Sign Up</h2>\n    <input type=\"text\" class=\"input\" placeholder=\"First Name\" id=\"firstName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Last Name\" id=\"lastName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Username\" id=\"userName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Email\" id=\"email\">\n    <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password\">\n    <input type=\"password\" class=\"input\" placeholder=\"Confirm Password\" id=\"confirmPassword\">\n    <button>Sign Up!</button>\n  </div>\n</form>\n\n<div id=\"successMsg\"></div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["viewquestion"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});