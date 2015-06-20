this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <section class=\"accordion thissection\">\n        <header id=\"head3\">Section Three</header>\n\n        <p id=\"para3\">How to play.</p>\n      </section>\n\n      <section class=\"accordion\">\n        <header id=\"head2\">Section Two</header>\n\n        <form id=\"addPhoto\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Photo Title\" id=\"photoTitle\">\n          <input type=\"text\" placeholder=\"Photo Description\" id=\"photoDesc\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form>\n      </section>\n    </div>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n  <label>Contact Category:\n    <select id=\"contactCat\">\n      <option value=\"family\">Family</option>\n      <option value=\"friends\">Friends</option>\n      <option value=\"coworkers\">Work Colleagues</option>\n      <option value=\"business\">Professional Contacts</option>\n    </select> <!-- end contactCat -->\n  </label>\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 medium-6 large-4 columns\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n  </div>\n  <div class=\"small-12 medium-6 large-4 columns\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n  </div>\n  <div class=\"small-12 medium-6 large-4 columns\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n    <img src=\"http://placehold.it/290x290\">\n  </div>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<nav id=\"nav\" class=\"top-bar\" data-topbar role=\"navigation\">\n  <ul class=\"title-area\">\n    <li class=\"name\">\n      <h1><a href=\"#\">visionQuestion</a></h1>\n    </li>\n  </ul>\n\n  <section class=\"top-bar-section\">\n    <!-- Right Nav Section -->\n    <ul class=\"right\">\n\n      <li class=\"active\">\n        <a href=\"#\">"
    + this.escapeExpression(((helper = (helper = helpers.greeting || (depth0 != null ? depth0.greeting : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"greeting","hash":{},"data":data}) : helper)))
    + "</a>\n      </li>\n      <li class=\"has-dropdown\">\n        <a href=\"#\">Log-in</a>\n        <ul class=\"dropdown\">\n            <li><input type=\"text\" id=\"user\" placeholder=\"Username\"></li>\n            <input type=\"password\" id=\"pw\" placeholder=\"Password\">\n            <button id=\"signIn\" type=\"button\">Sign In</button>\n        </ul>\n\n    </ul>\n  </section>\n</nav>\n\n\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["scoreboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"score\">\n<h2>visionQuestion Scoreboard</h2>\n\n<div class=\"scoretitle\">\n\n  <h4>Top Ten Leaders</h4>\n\n</div>\n<form>\n  <ul>\n\n    <li><span>User:"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span>  <span> Score: "
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n  </ul>\n</form>\n    <h4>Thank you for playing visionQuestion</h4>\n</div>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["signup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<form id=\"signup\">\n  <div class=\"signupForm large-4 large-centered columns\">\n    <h2>Sign Up</h2>\n    <input type=\"text\" class=\"input\" placeholder=\"First Name\" id=\"firstName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Last Name\" id=\"lastName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Username\" id=\"userName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Email\" id=\"email\">\n    <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password\">\n    <input type=\"password\" class=\"input\" placeholder=\"Confirm Password\" id=\"confirmPassword\">\n    <button>Sign Up!</button>\n  </div>\n</form>\n\n<div id=\"successMsg\"></div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["viewquestion"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});