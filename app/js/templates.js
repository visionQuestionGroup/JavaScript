this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n      <li data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"postview\">\n          <a href=\"#post/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\"></a>\n          <a href=\"#post/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"opacity\"></div></a>\n          <p>Taken by: "
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</p>\n        </div>\n      </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <section class=\"accordion thissection\">\n        <header id=\"head3\">How to play</header>\n\n        <p id=\"para3\">How to play instruction.</p>\n      </section>\n\n      <section class=\"accordion\">\n        <header id=\"head2\">Add Post</header>\n\n        <form id=\"addPhoto\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form>\n      </section>\n    </div>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n  <label>Sort by:\n    <select id=\"sortBy\">\n      <option value=\"available\">Available</option>\n      <option value=\"completedFail\">Completed - Successful</option>\n      <option value=\"completedSuccess\">Completed - Unsuccessful</option>\n      <option value=\"myPosts\">My Posts</option>\n    </select> <!-- end contactCat -->\n  </label>\n</div>\n\n<div class=\"row\">\n  <div class=\"small-12 medium-6 large-4 columns\">\n\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<ul class=\"title-area\">\n  <li class=\"name\">\n    <h1><a href=\"#\">visionQuestion</a></h1>\n  </li>\n</ul>\n\n<section class=\"top-bar-section\">\n  <!-- Right Nav Section -->\n  <ul class=\"right\">\n\n    <li class=\"active\">\n\n    </li>\n\n    <li class=\"has-dropdown\">\n      <a href=\"#\">User Menu</a>\n      <ul class=\"dropdown\">\n        <li>\n          <form id=\"logIn\">\n            <label>\n              <input type=\"text\" id=\"userName\" placeholder=\"username\">Username\n            </label>\n            <label>\n              <input type=\"password\" id=\"userPassword\" placeholder=\"password\">Password\n            </label>\n            <a href=\"#\" class=\"button info radius\">Log In</a>\n          </form>\n        </li>\n        <li class=\"active\"><a href=\"#\">Scoreboard</a></li>\n      </ul>\n    </li>\n  </ul>\n</section>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["scoreboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"score\">\n<h2>visionQuestion Scoreboard</h2>\n\n<div class=\"scoretitle\">\n\n  <h4>Top Ten Leaders</h4>\n\n</div>\n<form>\n  <ul>\n    <li>User: <span>Mr Test</span> Score: <span>40</span></li>\n    <li>User: <span>Test John</span> Score: <span>16</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span> <span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.user_name || (depth0 != null ? depth0.user_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user_name","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li><span>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</span></li>\n  </ul>\n</form>\n\n</div>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["signup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n\n\n<form id=\"signup\">\n  <div class=\"signupForm large-4 large-centered columns\">\n    <h2>Sign Up</h2>\n    <input type=\"text\" class=\"input\" placeholder=\"First Name\" id=\"firstName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Last Name\" id=\"lastName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Username\" id=\"userName\">\n    <input type=\"text\" class=\"input\" placeholder=\"Email\" id=\"email\">\n    <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password\">\n    <input type=\"password\" class=\"input\" placeholder=\"Confirm Password\" id=\"confirmPassword\">\n    <button>Sign Up!</button>\n  </div>\n</form>\n\n<div id=\"successMsg\"></div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["viewquestion"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});