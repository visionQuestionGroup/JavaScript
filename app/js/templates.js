this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "\n    <li class=\"post\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"postview\">\n        <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\"></a>\n        <p>Taken by: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.user_name : stack1), depth0))
    + "</p>\n      </div>\n    </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n\n      <div class=\"instructions\">\n        <header id=\"howToPlay\"> Play visionQuestion</header>\n\n      <div class=\"accordion thissection\">\n        <header id=\"howToPlay\">Two Ways to Play:</header>\n\n\n        <p class=\"instructions\" id=\"para3\">Post visionQuestion pictures and answers or guess answers to other players pictures!</p>\n        <p class=\"instructions\">Posting can be done using the visionQuestion mobile app or by entering an image URL and answer in the form below.</p>\n      </div> \n\n      <div class=\"addpost\">\n        <header id=\"addPost\">Add your picture and answer here</header>\n\n        <form id=\"addPost\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form> \n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"sorting\">\n  <label>Sort by:\n    <a href=\"#\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"all\" checked=\"checked\">All</input></a>\n    <a href=\"#playable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"playable\">Playable</input></a>\n    <a href=\"#unplayable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"unplayable\">Unplayable</input></a>\n    <a href=\"#allmyposts\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsAll\">My Posts - All</input></a>\n    <a href=\"#mypostssolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsSolved\">My Posts - Solved</input></a>\n    <a href=\"#mypostsnotsolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsNot\">My Posts - Not Solved</input></a>\n  </label>\n</div>\n\n<div class=\"columns\">\n\n  <ul class=\"small-block-grid-3 posts\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["mypostsall"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n    <li class=\"post\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"postview\">\n        <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\"></a>\n        <p>Taken by: Me</p>\n      </div>\n    </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <div class=\"instructions\">\n        <header id=\"howToPlay\">How to play</header>\n\n        <p id=\"para3\">How to play instruction.</p>\n      </div> \n\n      <div class=\"addpost\">\n        <header id=\"addPost\">Add Post</header>\n\n        <form id=\"addPost\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form> \n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"sorting\">\n  <label>Sort by:\n    <a href=\"#\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"all\">All</input></a>\n    <a href=\"#playable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"playable\">Playable</input></a>\n    <a href=\"#unplayable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"unplayable\">Unplayable</input></a>\n    <a href=\"#allmyposts\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsAll\" checked=\"checked\">My Posts - All</input></a>\n    <a href=\"#mypostssolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsSolved\">My Posts - Solved</input></a>\n    <a href=\"#mypostsnotsolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsNot\">My Posts - Not Solved</input></a>\n  </label>\n</div>\n\n<div class=\"columns\">\n\n  <ul class=\"small-block-grid-3 posts\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["mypostsnotsolved"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n    <li class=\"post\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"postview\">\n        <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\"></a>\n        <p>Taken by: Me</p>\n      </div>\n    </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <div class=\"instructions\">\n        <header id=\"howToPlay\">How to play</header>\n\n        <p id=\"para3\">How to play instruction.</p>\n      </div> \n\n      <div class=\"addpost\">\n        <header id=\"addPost\">Add Post</header>\n\n        <form id=\"addPost\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form> \n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"sorting\">\n  <label>Sort by:\n    <a href=\"#\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"all\">All</input></a>\n    <a href=\"#playable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"playable\">Playable</input></a>\n    <a href=\"#unplayable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"unplayable\">Unplayable</input></a>\n    <a href=\"#allmyposts\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsAll\">My Posts - All</input></a>\n    <a href=\"#mypostssolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsSolved\">My Posts - Solved</input></a>\n    <a href=\"#mypostsnotsolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsNot\" checked=\"checked\">My Posts - Not Solved</input></a>\n  </label>\n</div>\n\n<div class=\"columns\">\n\n  <ul class=\"small-block-grid-3 posts\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["mypostssolved"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n    <li class=\"post\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"postview\">\n        <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\"></a>\n        <p>Taken by: Me</p>\n      </div>\n    </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <div class=\"instructions\">\n        <header id=\"howToPlay\">How to play</header>\n\n        <p id=\"para3\">How to play instruction.</p>\n      </div> \n\n      <div class=\"addpost\">\n        <header id=\"addPost\">Add Post</header>\n\n        <form id=\"addPost\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form> \n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"sorting\">\n  <label>Sort by:\n    <a href=\"#\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"all\">All</input></a>\n    <a href=\"#playable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"playable\">Playable</input></a>\n    <a href=\"#unplayable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"unplayable\">Unplayable</input></a>\n    <a href=\"#allmyposts\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsAll\">My Posts - All</input></a>\n    <a href=\"#mypostssolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsSolved\" checked=\"checked\">My Posts - Solved</input></a>\n    <a href=\"#mypostsnotsolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsNot\">My Posts - Not Solved</input></a>\n  </label>\n</div>\n\n<div class=\"columns\">\n\n  <ul class=\"small-block-grid-3 posts\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "\n    <h1 class=\"logo\"><a href=\"#\">visionQuestion</a></h1>\n\n    <h3 class=\"link playLink\"><a href=\"#\">Play!</a></h3>\n\n    <h3 class=\"link signUpLink\"><a href=\"#signup\">Sign Up</a></h3>\n\n    <h3 class=\"link scoreLink\"><a href=\"#scoreboard\">Leaderboard</a></h3>\n\n    <span id=\"signOutBtn\">Not you? Sign out here.</span>\n\n    <div class=\"scoreBlock\">\n\n      <span id=\"score\"></span>\n\n    </div>\n\n    <span class=\"score\">Your score:</span>\n\n    <span class=\"greeting\">!</span>\n\n    <span id=\"greetName\"></span>\n\n    <span class=\"greeting\">Welcome, </span>\n\n\n\n";
},"3":function(depth0,helpers,partials,data) {
    return "\n    <h1 class=\"logo\"><a href=\"#\">   visionQuestion</a></h1>\n\n    <h3 class=\"link playLink\"><a href=\"#\">Play!</a></h3>\n\n    <h3 class=\"link signUpLink\"><a href=\"#signup\">Sign Up</a></h3>\n\n    <h3 class=\"link scoreLink\"><a href=\"#scoreboard\">Leaderboard</a></h3>\n\n    <form class=\"signIn\">\n\n      <button class=\"loginBtn\" id=\"signIn\" type=\"button\">Sign In</button>\n\n      <div class=\"passwordLogin\">\n        <input class=\"\" type=\"password\" id=\"pw\" placeholder=\"Password\">\n      </div>\n\n      <div class=\"userNameLogin\">\n        <input class=\"\" type=\"text\" id=\"user\" placeholder=\"Username\">\n      </div>\n\n    </form>\n\n    <span class=\"anonMsg\">Sign in to play:</span>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n</nav>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["postsplayable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "\n    <li class=\"post\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"postview\">\n        <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\"></a>\n        <p>Taken by: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.user_name : stack1), depth0))
    + "</p>\n      </div>\n    </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n\n      <div class=\"instructions\">\n        <header id=\"howToPlay\">How to play</header>\n\n      <div class=\"accordion thissection\">\n        <header id=\"howToPlay\">Two Ways to Play:</header>\n\n\n        <p class=\"instructions\" id=\"para3\">1) Post visionQuestions and their answers for other players to guess!</p>\n        <p class=\"instructions\">This can be done using the visionQuestion mobile app, or by simply entering an image URL in the form below.</p>\n      </div> \n\n      <div class=\"addpost\">\n        <header id=\"addPost\">Add Post</header>\n\n        <form id=\"addPost\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form> \n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"sorting\">\n  <label>Sort by:\n    <a href=\"#\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"all\">All</input></a>\n    <a href=\"#playable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"playable\" checked=\"checked\">Playable</input></a>\n    <a href=\"#unplayable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"unplayable\">Unplayable</input></a>\n    <a href=\"#allmyposts\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsAll\">My Posts - All</input></a>\n    <a href=\"#mypostssolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsSolved\">My Posts - Solved</input></a>\n    <a href=\"#mypostsnotsolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsNot\">My Posts - Not Solved</input></a>\n  </label>\n</div>\n\n<div class=\"columns\">\n\n  <ul class=\"small-block-grid-3 posts\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["postsunplayable"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "\n    <li class=\"post\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"postview\">\n        <a href=\"#visionQuestion/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.post_info : depth0)) != null ? stack1.image_url : stack1), depth0))
    + "\"></a>\n        <p>Taken by: "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.creator : depth0)) != null ? stack1.user_name : stack1), depth0))
    + "</p>\n      </div>\n    </li>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row wrapper\">\n  <div class=\"row\">\n    <div class=\"small-12 small-centered columns rulesandupload\">\n\n      <div class=\"instructions\">\n        <header id=\"howToPlay\">How to play</header>\n\n        <p id=\"para3\">How to play instruction.</p>\n      </div> \n\n      <div class=\"addpost\">\n        <header id=\"addPost\">Add Post</header>\n\n        <form id=\"addPost\">\n          <input type=\"text\" placeholder=\"Photo URL\" id=\"photoURL\">\n          <input type=\"text\" placeholder=\"Answer\" id=\"answer\">\n          <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"mdi-content-send right\"></i></button>\n        </form> \n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"sorting\">\n  <label>Sort by:\n    <a href=\"#\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"all\">All</input></a>\n    <a href=\"#playable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"playable\">Playable</input></a>\n    <a href=\"#unplayable\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"unplayable\" checked=\"checked\">Unplayable</input></a>\n    <a href=\"#allmyposts\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsAll\">My Posts - All</input></a>\n    <a href=\"#mypostssolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsSolved\">My Posts - Solved</input></a>\n    <a href=\"#mypostsnotsolved\"><input type=\"radio\" name=\"sortByOption\" class=\"sortby\" value=\"myPostsNot\">My Posts - Not Solved</input></a>\n  </label>\n</div>\n\n<div class=\"columns\">\n\n  <ul class=\"small-block-grid-3 posts\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n</div>\n";
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

  return "<div class=\"scored\">\n  <h2>visionQuestion Scoreboard</h2>\n\n  <div class=\"scoretitle\">\n    <h4>Top Ten Leaders</h4>\n  </div>\n\n  <form>\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.users : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </form>\n  <div class=\"thkyou\">\n  <h4>Thank you for playing visionQuestion</h4>\n  </div>\n</div>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["signup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"signup\">\n\n  <div class=\"signupForm large-4 large-centered columns\">\n\n    <h2>Sign Up</h2>\n\n    <input type=\"text\" class=\"input\" placeholder=\"First Name\" id=\"firstName\">\n\n    <input type=\"text\" class=\"input\" placeholder=\"Last Name\" id=\"lastName\">\n\n    <input type=\"text\" class=\"input\" placeholder=\"Username\" id=\"userName\">\n\n    <input type=\"text\" class=\"input\" placeholder=\"Email\" id=\"email\">\n\n    <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password\">\n\n    <input type=\"password\" class=\"input\" placeholder=\"Confirm Password\" id=\"confirmPassword\">\n\n    <button>Sign Up!</button>\n\n  </div>\n\n</form>\n\n<div id=\"successMsg\"></div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["viewquestion"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"singleview\">\n\n  <img src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.post_info : stack1)) != null ? stack1.image_url : stack1), depth0))
    + "\">\n <p>Taken by: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.post : depth0)) != null ? stack1.creator : stack1)) != null ? stack1.user_name : stack1), depth0))
    + "</p>\n\n  <form>\n    <input type=\"text\" id=\"guessText\" placeholder=\"What's your guess?\">\n    <button type=\"submit\" id=\"guessBtn\" name=\"action\">Submit</button>\n  </form>\n\n\n\n</div>\n";
},"useData":true});