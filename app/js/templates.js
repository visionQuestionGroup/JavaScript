this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "\n      <li data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"postview\">\n          <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\"></a>\n          <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"opacity\"></div></a>\n          <p>Taken by: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.user_name : stack1), depth0))
    + "</p>\n        </div>\n      </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <div class=\"accordion thissection\">\n        <header id=\"howToPlay\">How to play</header>\n\n        <p id=\"para3\">How to play instruction.</p>\n      </div> \n\n      <div class=\"accordion\">\n        <header id=\"addPost\">Add Post</header>\n\n        <form id=\"addPost\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form> \n      </div> \n    </div>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n  <label>Sort by:\n    <select id=\"sortBy\">\n      <option value=\"available\">Available</option>\n      <option value=\"completedFail\">Completed - Successful</option>\n      <option value=\"completedSuccess\">Completed - Unsuccessful</option>\n      <option value=\"myPosts\">My Posts</option>\n    </select> <!-- end contactCat -->\n  </label>\n</div>\n\n<div class=\"row\">\n  <div class=\"columns\">\n\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "\n    <h1 class=\"logo\"><a href=\"#\">visionQuestion</a></h1>\n\n    <h3 class=\"link playLink\"><a href=\"#\">Play!</a></h3>\n\n    <h3 class=\"link signUpLink\"><a href=\"#signup\">Sign Up</a></h3>\n\n    <h3 class=\"link scoreLink\"><a href=\"#scoreboard\">Leaderboard</a></h3>\n\n    <span id=\"signOutBtn\">Not you? Sign out here.</span>\n\n    <span class=\"greeting\">"
    + this.escapeExpression(((helper = (helper = helpers.greeting || (depth0 != null ? depth0.greeting : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"greeting","hash":{},"data":data}) : helper)))
    + "</span>\n\n";
},"3":function(depth0,helpers,partials,data) {
    return "\n    <h1 class=\"logo\"><a href=\"#\">   visionQuestion</a></h1>\n\n    <h3 class=\"link playLink\"><a href=\"#\">Play!</a></h3>\n\n    <h3 class=\"link signUpLink\"><a href=\"#signup\">Sign Up</a></h3>\n\n    <h3 class=\"link scoreLink\"><a href=\"#scoreboard\">Leaderboard</a></h3>\n\n    <form class=\"signIn\">\n\n      <button class=\"loginBtn\" id=\"signIn\" type=\"button\">Sign In</button>\n\n      <div class=\"passwordLogin\">\n        <input class=\"\" type=\"password\" id=\"pw\" placeholder=\"Password\">\n      </div>\n\n      <div class=\"userNameLogin\">\n        <input class=\"\" type=\"text\" id=\"user\" placeholder=\"Username\">\n      </div>\n\n    </form>\n\n    <span class=\"anonMsg\">Sign in to play:</span>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n</nav>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["scoreboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li><span>User: "
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span>  <span> Score: "
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"score\">\n  <h2>visionQuestion Scoreboard</h2>\n\n  <div class=\"scoretitle\">\n    <h4>Top Ten Leaders</h4>\n  </div>\n\n  <form>\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.users : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </form>\n\n  <h4>Thank you for playing visionQuestion</h4>\n\n</div>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["signup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"signup\">\n\n  <div class=\"signupForm large-4 large-centered columns\">\n\n    <h2>Sign Up</h2>\n\n    <input type=\"text\" class=\"input\" placeholder=\"First Name\" id=\"firstName\">\n\n    <input type=\"text\" class=\"input\" placeholder=\"Last Name\" id=\"lastName\">\n\n    <input type=\"text\" class=\"input\" placeholder=\"Username\" id=\"userName\">\n\n    <input type=\"text\" class=\"input\" placeholder=\"Email\" id=\"email\">\n\n    <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password\">\n\n    <input type=\"password\" class=\"input\" placeholder=\"Confirm Password\" id=\"confirmPassword\">\n\n    <button>Sign Up!</button>\n\n  </div>\n\n</form>\n\n<div id=\"successMsg\"></div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["viewquestion"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"singleview\">\n\n  <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\">\n <p>Taken by: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.user_name : stack1), depth0))
    + "</p>\n\n  <input type=\"text\" id=\"guess\" placeholder=\"What's your guess?\">\n  <button type=\"submit\" name=\"action\">Submit</button>\n  <button id=\"hint\" data-id=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">Hint</button>\n\n</div>\n";
},"useData":true});