this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"small-block-grid-2 medium-block-grid-3 large-block-grid-4\">\n  <li><img src=\"http://placehold.it/300x300\"></li>\n  <li><img src=\"http://placehold.it/300x300\"></li>\n  <li><img src=\"http://placehold.it/300x300\"></li>\n  <li><img src=\"http://placehold.it/300x300\"></li>\n  <li><img src=\"http://placehold.it/300x300\"></li>\n  <li><img src=\"http://placehold.it/300x300\"></li>\n</ul>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["signup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<form id=\"signup\">\n  <div class=\"signupForm large-4 large-centered columns\">\n    <h2>Sign Up</h2>\n    <input type=\"text\" class=\"input\" placeholder=\"First Name\" id=\"firstName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Last Name\" id=\"lastName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Username\" id=\"userName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Email\" id=\"email\">\n    <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password\">\n    <input type=\"password\" class=\"input\" placeholder=\"Confirm Password\" id=\"confirmPassword\">\n    <button>Sign Up!</button>\n  </div>\n</form>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["viewquestion"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});