this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "      <div class=\"row\">\n        <div class=\"large-3 columns\">\n          <h1><img src=\"http://placehold.it/400x100&text=Logo\"/></h1>\n        </div>\n        <div class=\"large-9 columns\">\n          <ul class=\"right button-group\">\n          <li><a href=\"#\" class=\"button\">Home</a></li>\n          <li><a href=\"#\" class=\"button\">Score</a></li>\n          <li><a href=\"#\" class=\"button\">Link 3</a></li>\n          <li><a href=\"#\" class=\"button\">Link 4</a></li>\n          </ul>\n         </div>\n       </div>\n\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n        <div id=\"slider\">\n          <img src=\"http://placehold.it/1000x400&text=[ img 1 ]\"/>\n        </div>\n\n        <hr/>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"large-4 columns\">\n          <img src=\"http://placehold.it/400x300&text=[img]\"/>\n          <h4>This is a content section.</h4>\n          <p>B</p>\n        </div>\n\n        <div class=\"large-4 columns\">\n          <img src=\"http://placehold.it/400x300&text=[img]\"/>\n          <h4>This is a content section.</h4>\n          <p>b</p>\n        </div>\n\n        <div class=\"large-4 columns\">\n          <img src=\"http://placehold.it/400x300&text=[img]\"/>\n          <h4>This is a content section.</h4>\n          <p>B</p>\n        </div>\n\n        </div>\n\n    <div class=\"row\">\n        <div class=\"large-12 columns\">\n\n          <div class=\"panel\">\n            <h4>Get in touch!</h4>\n\n            <div class=\"row\">\n              <div class=\"large-9 columns\">\n                <p>We'd love to hear from you, you attractive person you.</p>\n              </div>\n              <div class=\"large-3 columns\">\n                <a href=\"#\" class=\"radius button right\">Contact Us</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n\n\n      <footer class=\"row\">\n        <div class=\"large-12 columns\">\n          <hr/>\n          <div class=\"row\">\n            <div class=\"large-6 columns\">\n              <p>© Copyright no one at all. Go to town.</p>\n            </div>\n            <div class=\"large-6 columns\">\n              <ul class=\"inline-list right\">\n                <li><a href=\"#\">Link 1</a></li>\n                <li><a href=\"#\">Link 2</a></li>\n                <li><a href=\"#\">Link 3</a></li>\n                <li><a href=\"#\">Link 4</a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </footer>\n\n";
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