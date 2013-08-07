Ember.TEMPLATES["anime/anime"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n<div class=\"black-top\">\n    <div class=\"container\">\n        <header id=\"fanart\" ");
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("fanartStyle")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        <div class=\"smallprogress\">\n            <div class=\"smallprogress-filled\" style=\"width:23.076923076923077%;\" data-bindattr-127=\"127\">\n            </div>\n          </div>\n        </header>\n    </div>\n</div>\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "controller.content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["anime/description/activity/animeActivityEmpty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Shh.. no one has seen this yet.. It will be our little secret.");
  
});

Ember.TEMPLATES["anime/description/activity/animeActivityItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n            <div class=\"backdrop\">\n                <!-- <div class=\"unseen-episodes\"><small>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.amount", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("/");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.episodes.length", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</small></div>-->\n                    <div class=\"smallprogress\">\n                        <div class=\"smallprogress-filled\" ");
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("view.percentStyle")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    </div>\n                </div>\n            </div>\n        ");
  return buffer;
  }

  data.buffer.push("<div class='gallery-image'>\n    <a>\n        <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("view.content.gravatarSmall")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n        ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "view.incomplete", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </a>\n</div>\n<p>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.nick", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n");
  return buffer;
  
});

Ember.TEMPLATES["anime/description/animeDescription"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" \n                <h2 class=\"col-lg-3\">Next <span class=\"normal\">episode</span></h2>\n            ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                More\n            ");
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n            <div class=\"pull-left col-lg-3\">\n                <div class=\"gallery-image\">\n                    <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", "episodemodal", "episode", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"clickable\">\n                        <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("episode.imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                        <span>\n                            View Episode\n                        </span>\n                    </a>\n                </div>\n                <p class=\"bold\">\n                <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", "episodemodal", "episode", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"clickable\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "episode.anime.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "episode.number", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n                <p class=\"calendarinfo\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "episode.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n            </div>\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n            <li class=\"pull-left\">\n                <a class=\"genre\" rel=\"popover\" ");
  hashTypes = {'data-content': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'data-content': ("g.description")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {'data-original-title': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'data-original-title': ("g.name")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display: block; opacity: 1; padding-right: 5px;\">\n                    <span class=\"genre_name\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "g.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                    <span class=\"genre_count\">24</span>\n                </a>\n            </li>\n        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n            ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "t", "in", "onlyTags", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                <li class=\"pull-left\">\n                    <a class=\"tag\" rel=\"popover\" ");
  hashTypes = {'data-content': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'data-content': ("t.description")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {'data-original-title': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'data-original-title': ("g.name")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" style=\"display: block; opacity: 1; padding-right: 5px;\">\n                        <span class=\"tag_name\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "t.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n                        <span class=\"tag_count\">24</span>\n                    </a>\n                </li>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"container content infobar\">\n    <div class=\"row\">\n        <div class=\"col-lg-9 pull-left\">\n            <h1>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("<span class=\"small pull-right\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "toFromDates", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></h1>\n            <div class=\"col-lg-9 pull-left\">\n                 <p class=\"animedesc\">\n				    ");
  hashTypes = {'unescaped': "STRING"};
  stack1 = helpers._triageMustache.call(depth0, "desc", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			     </p>\n            </div>\n            <div class=\"col-lg-3 pull-right\">\n                <table class=\"table table-striped table-condensed table-small\">\n                    <tbody class=\"pull-right\">\n                        <tr>\n                            <td class=\"muted\">Status</td>\n                            <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "status", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                        </tr>\n                        <tr>\n                            <td class=\"muted\">Runtime</td>\n                            <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "runtime", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" min</td>\n                        </tr>\n\n                        <tr>\n                            <td class=\"muted\">Episodes</td>\n                            <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "regularEpisodes", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" (");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "specialEpisodes", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" specials)</td>\n                        </tr>\n                        <tr>\n                            <td class=\"muted\">Time</td>\n                        <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "totalRuntime", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" min</td>\n                        </tr>\n                        <tr>\n                            <td class=\"muted\">Class</td>\n                            <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "classification", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                        </tr>\n                        <tr>\n                            <td class=\"muted\">Type</td>\n                            <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "type", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"col-lg-3 pull-right\">\n			<img class=\"posterimage pull-right\" ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n		</div>\n    </div>\n</div>\n<div class=\"container content\">\n\n    ");
  data.buffer.push("\n    <div class=\"gallery-header row\">\n            ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "hasFutureEpisodes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <h2 class=\"col-lg-3\">Last aired <span class=\"normal\">episodes</span></h2>\n            ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-small pull-right bold")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.episodes", options) : helperMissing.call(depth0, "linkTo", "anime.episodes", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    <div class=\"row\">\n        <div class=\"anime-gallery\">\n            ");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "episode", "in", "lastEpisodes", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </div>\n    </div>\n\n</div>\n<div class=\"container content infobar\" style=\"\n    font-size: 0.8em;\n    font-weight: bold;\n\">\n    <h2>Genres <span ");
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("view.showTags::normal")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">& tags</span></h2>\n    <a ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleTags", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn btn-small pull-right\" style=\"margin-top:5px;\">More</a>\n    <br class=\"clearfix\">\n\n    <div class=\"row\">\n        <ul class=\"col-lg-10\">\n\n        ");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "g", "in", "onlyGenres", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        ");
  hashTypes = {};
  stack2 = helpers['if'].call(depth0, "view.showTags", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </ul>\n    </div>\n</div>\n\n    <div class=\"container content\">\n\n    \n    <div class=\"row\">\n        <h2><span class=\"normal\">Last</span> seen <span class=\"normal\">by</span></h2>\n        \n        ");
  hashTypes = {'contentBinding': "STRING",'episodesBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.AnimeActivityView", {hash:{
    'contentBinding': ("seen"),
    'episodesBinding': ("episodes")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </div>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["anime/episodes/animeEpisodes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "anime.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"container content\">\n  <ul class=\"breadcrumb\">\n    <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "anime", options) : helperMissing.call(depth0, "linkTo", "anime.description", "anime", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n    <li class=\"active\">Episodes</li>\n  </ul>\n\n");
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.EpisodeListView", {hash:{
    'contentBinding': ("pagedContent")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.PaginatorCollectionView", {hash:{
    'contentBinding': ("controller.paginator")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n<!--\n<div class=\"modal hide fade\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aira-hidden=\"true\">&times;</button>\n    <h3>Modal header</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>One fine day</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\">Close</a>\n    <a href=\"#\" class=\"btn btn-primary\">Save changes</a>\n  </div>\n</div>\n-->\n\n\n\n      <!-- TEST -->\n<!--\n      <div class=\"comment-container\">\n        <div class=\"comment-avatar\">\n          <img src=\"http://gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa?s=40\">\n        </div>\n        <div class=\"comment\">\n          <div class=\"comment-meta\"><a href=\"#\">groenlid</a> added a comment<span class=\"comment-time\"><abbr class=\"timeago\" title=\"2012-04-19T08:14:01-0500\">15 hours ago</abbr></span></div>\n          <div class=\"comment-text\">\n            Thought this would never end!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"comment-container\">\n        <div class=\"comment-avatar\">\n          <img src=\"http://gravatar.com/avatar/79bf7c793958b269fc2ad82c1c36afd7.jpg?s=40&r=pg\">\n        </div>\n        <div class=\"comment\">\n          <div class=\"comment-meta\"><a href=\"#\">larseknu</a> added a comment<span class=\"comment-time\"><abbr class=\"timeago\" title=\"2012-04-19T08:14:01-0500\">16 hours ago</abbr></span></div>\n          <div class=\"comment-text\">\n            Best episode ..... EVER!\n          </div>\n        </div>\n      </div>\n\n      <div class=\"comment-container\">\n        <div class=\"comment-avatar\">\n          <img src=\"http://gravatar.com/avatar/253691ed13945e5fb883c4e05b4c470c?s=40\">\n        </div>\n        <div class=\"comment\">\n        <div class=\"comment-meta\">\n          <a href=\"/user/view/2\">atemu</a> watched this episode<span class=\"comment-time\"><abbr class=\"timeago\" title=\"2012-03-27T03:33:02-0500\">17 hours ago</abbr></span></div>\n        </div>  \n      </div>\n\n      <div class=\"comment-container\">\n        <div class=\"comment-avatar\">\n          <img src=\"http://gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa?s=40\">\n        </div>\n        <div class=\"comment\">\n        <div class=\"comment-meta\">\n          <a href=\"/user/view/1\">groenlid</a> watched this episode<span class=\"comment-time\"><abbr class=\"timeago\" title=\"2012-03-27T03:33:02-0500\">18 hours ago</abbr></span></div>\n        </div>  \n      </div>\n-->\n      <!-- TEST END -->");
  return buffer;
  
});

Ember.TEMPLATES["animeList/animeFanart"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n<div class=\"anime-gallery gallery-fanart pull-left\">\n    <div class=\"gallery-image\">\n       ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "", options) : helperMissing.call(depth0, "linkTo", "anime.description", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    <p>\n        ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </p>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n            <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("fanartURLSmall")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n            <span>\n                View Anime\n            </span>\n        ");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "view.content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["animeList/animeInfoList"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n<div class=\"media\">\n  <div class=\"gallery-poster pull-left\">\n    <div class=\"gallery-image\">\n      ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "", options) : helperMissing.call(depth0, "linkTo", "anime.description", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n    	");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "", options) : helperMissing.call(depth0, "linkTo", "anime.description", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</h4>\n    <p>");
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "desc", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</p>\n  </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n          <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("imageURLSmall")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n				");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			");
  return buffer;
  }

  data.buffer.push("<hr>\n");
  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "view.content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["animeList/animePoster"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n<div class=\"anime-gallery gallery-poster pull-left\">\n    <div class=\"gallery-image\">\n        ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "", options) : helperMissing.call(depth0, "linkTo", "anime.description", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n\n    <p>\n        ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </p>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n            <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("imageURLSmall")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n            <span>\n                View Anime\n            </span>\n        ");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "view.content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["animeList/loadingOrEmpty"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <h1>\n        The collection is empty. Here, have a cat..\n    </h1>\n    <img class='posterimage' src='./img/mascot.jpg'>\n");
  }

function program3(depth0,data) {
  
  
  data.buffer.push(" \n    <div class=\"loading\"></div>\n");
  }

  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "content.isLoaded", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["animeoverview/animeoverview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<style type=\"text/css\">\n.title {\ncolor: rgb(145, 145, 145);\ntext-shadow: 0px -1px 0px rgb(0, 0, 0);\n}\n</style>\n<div class=\"black-top\" style=\"padding-top:200px;\">\n	<div class=\"row no-margin\">\n		<div class=\"col-lg-4\">\n			<div class=\"col-lg-4\"><img src=\"http://urani.me/attachments/photos/orginal/516af86c-8870-4116-bf69-5970b8adc2dc.jpg\"/>\n			<p class=\"title\">Mushibugyou</p></div>\n			<div class=\"col-lg-4\"><img src=\"http://urani.me/attachments/photos/orginal/51605bb5-63e8-43c7-8873-1444b8adc2dc.jpg\"/>\n			<p class=\"title\">Date A Live</p></div>\n			<div class=\"col-lg-4\"><img src=\"http://urani.me/attachments/photos/orginal/51647660-590c-433c-adfb-765ab8adc2dc.jpg\"/>\n			<p class=\"title\">Hyakka Ryouran: S...</p></div>\n		</div>\n		<div class=\"col-lg-4\">\n			<div class=\"col-lg-12\" style=\"position:absolute; top:-100px\">\n				<img class=\"fanart\" src=\"http://urani.me/attachments/photos/orginal/51570d37-4bd8-42b8-985d-7b50b8adc2dc.jpg\"/>\n				<div class=\"infobar\"><h1 class=\"no-margin\" style=\"padding:20px;\">Shingeki no Kyojin</h1></div>\n				<div class=\"animeplot\" style=\"background:#fff; padding:20px;\">\n					<p class=\"animedesc\">Several hundred years ago, humans were nearly exterminated by giants. Giants are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of giants.\n					Flash forward to the present and the city has not seen a giant in over 100 years. Teenage boy Elen and his foster sister Mikasa witness something horrific as the city walls are destroyed by a super giant that appears out of thin air. As the smaller giants flood the city, the two kids watch in horror as their mother is eaten alive. Elen vows that he will murder every single giant and take revenge for all of mankind.</p>\n				</div>\n			</div>\n		</div>\n		<div class=\"col-lg-4\">\n			<div class=\"col-lg-4\"><img src=\"http://urani.me/attachments/photos/orginal/515c87e5-40f0-408d-93ac-526ab8adc2dc.jpg\"/>\n			<p class=\"title\">Hataraku Maou-sama!</p></div>\n			<div class=\"col-lg-4\"><img src=\"http://urani.me/attachments/photos/orginal/4f90535e-ada4-4d01-a1cb-05989e27ab78.jpg\"/>\n			<p class=\"title\">Kurozuka</p></div>\n			<div class=\"col-lg-4\"><img src=\"http://urani.me/attachments/photos/orginal/4f0f824b-edf8-47b7-925c-1ddb9e27ab78.jpg\"/>\n			<p class=\"title\">Fairy Tail</p></div>\n		</div>\n	</div>\n</div>");
  
});

Ember.TEMPLATES["application/application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Community");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Calendar");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Requests");
  }

  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <a class=\"navbar-toggle pull-left\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </a>\n        <a class=\"navbar-brand\" href=\"#\">Uranime</a>\n\n        <div class=\"nav-collapse collapse\">\n\n            <ul class=\"nav navbar-nav\">\n                <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "community", options) : helperMissing.call(depth0, "linkTo", "community", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n                <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "calendar", "date", options) : helperMissing.call(depth0, "linkTo", "calendar", "date", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                <li>");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "requests", options) : helperMissing.call(depth0, "linkTo", "requests", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n            </ul>\n\n            <ul class=\"nav navbar-nav pull-right\">\n\n                <!-- Notification w/popover -->\n                <li class=\"divider-vertical\"></li>\n                ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SearchFormView", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                <li class=\"divider-vertical\"></li>\n                ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.NotificationsView", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n\n                <!-- User profile -->\n                <li class=\"divider-vertical\"></li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                         <img src=\"http://www.gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa.jpg?size=20\" class=\"img-rounded\"> Groenlid <b class=\"caret\"></b>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a tabindex=\"-1\">Profile</a></li>\n                        <li><a tabindex=\"-1\">Watchlist</a></li>\n                        <li><a href=\"index.html#/user/1/library\" tabindex=\"-1\">Library</a></li>\n                        <li><a tabindex=\"-1\">Settings</a></li>\n                        <li><a tabindex=\"-1\">Help</a></li>\n                        <li class=\"divider\"></li>\n                        <li><a tabindex=\"-1\">Logout</a></lwi>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["calendar/calendar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "lastWeekLink", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

function program3(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nextWeekLink", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n    <div class=\"content container infobar\">\n        <h1 class=\"text-center\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "day.firstObject.weekday", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" <span class=\"normal\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "day.firstObject.date", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</span></h1>\n    </div>\n    <div class=\"content container\">\n        ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "episode", "in", "day.lastObject", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n            <div class=\"anime-gallery pull-left gallery-fanart\">\n                <div class=\"gallery-image\">\n                    <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", "episodemodal", "episode", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"clickable\">\n                        <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("episode.imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    </a>\n                </div>\n                <p class=\"bold single\">\n                    ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "episode.anime", options) : helperMissing.call(depth0, "linkTo", "anime.description", "episode.anime", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                </p>\n                <p class=\"calendarinfo single\">\n                    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "episode.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </p>\n            </div>\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                        ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "episode.anime.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "episode.number", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"content container\">\n	<ul class=\"pager\">\n		<li class=\"previous\">\n			");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "calendar", "lastWeek", options) : helperMissing.call(depth0, "linkTo", "calendar", "lastWeek", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n		<li class=\"next\">\n			");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "calendar", "nextWeek", options) : helperMissing.call(depth0, "linkTo", "calendar", "nextWeek", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>\n	</ul>\n</div>\n");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "day", "in", "controller.arrangedEpisodes", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["common/paginator/paginatorItemView"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n  <a class=\"clickable\" ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "paginate", "view.content", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n  <a>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.content.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "view.content.action", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["community/community"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n        <div class=\"col-lg-4\">\n                <div class=\"seenepisode\">\n                    <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", "episodemodal", "activity.episode", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"clickable\">\n                        <img class=\"gallery-image\" ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("activity.episode.imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                    </a>\n                        <div class=\"avatarWrapper\">\n                                <div class=\"avatar\">\n                                        ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "user.profile", "activity.user", options) : helperMissing.call(depth0, "linkTo", "user.profile", "activity.user", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                                        <p class=\"grey\">\n                                                <i class=\"glyphicon glyphicon-time\"></i> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "activity.since", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                        </p>\n                                </div>\n                            </div>\n                            <div class=\"desc\">\n                                ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "activity.episode.anime", options) : helperMissing.call(depth0, "linkTo", "anime.description", "activity.episode.anime", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                                ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "activity.episode.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                            </div>\n                </div>\n        </div>\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                                                <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("activity.user.gravatar")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n                                        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                                ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "activity.episode.anime.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "activity.episode.number", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                ");
  return buffer;
  }

  data.buffer.push("<div class=\"content container infobar\">\n   <h1>List of users should go here</h1>\n</div>\n<div class=\"container\">\n    ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "activity", "in", "view.controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["episode/episodeListItem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n<div class=\"row episodelist\">\n    <div class=\"pull-left col-lg-2\">\n        <div class=\"gallery-image\">\n            <a class=\"clickable\" ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", "episodemodal", "", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("this.imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" /></a>\n        </div>\n    </div>\n    <div class=\"col-lg-8 episode-info\">\n        <div class=\"row\">\n            <h4 class=\"col-lg-10 normal\">\n                <a class=\"clickable\" ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showEpisode", "", {hash:{
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "special", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    #");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "number", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" - ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </a>\n            </h4>\n            <p class=\"subtle col-lg-2 pull-right\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "parseAired", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n        </div>\n        <p>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "shortDescription", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n    </div>\n</div>\n<hr>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n                        <span class=\"label label-info\">Special</span>\n                    ");
  }

  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "view.content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n");
  return buffer;
  
});

Ember.TEMPLATES["episode/episodeModal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n<div class=\"modal-dialog episode\">\n  <div class=\"modal-content episode\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 js-episodeInfo\">\n        <div class=\"modal-episode\">\n          <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          <div class=\"border-image\"></div>\n        </div>\n        \n        <!--\n        <div class=\"last-seen\" style=\"display:none;\">\n          <h2><span class=\"bold\">Last</span> seen by</h2> \n\n\n          <img class=\"img-rounded\" src=\"http://www.gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa.jpg?size=30\">\n          <img class=\"img-rounded\" src=\"http://www.gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa.jpg?size=30\">\n          <img class=\"img-rounded\" src=\"http://www.gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa.jpg?size=30\">\n          <img class=\"img-rounded\" src=\"http://www.gravatar.com/avatar/5c713d38d26a2b1cef8ff286fc53c8fa.jpg?size=30\">\n        \n        </div>\n        -->\n\n        <div class=\"modal-footer\">\n          <p class=\"animedesc\">\n            ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" rel=\"close\" data-dismiss=\"modal\" aira-hidden=\"true\">&times;</button>\n          <div class=\"row\">\n            <div class=\"col-lg-11 centertext\">\n              <h2 class=\"nomargin\">\n                <a class=\"clickable\" href ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToAnime", "anime", {hash:{
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                  ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "anime.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </a>\n              </h2>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"comments js-commentsHeight\">\n          ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "activity", "in", "arrangedUserEpisode", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("              \n\n        </div>\n      </div>\n      <h2 class=\"outside\">\n          ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "view.hasPrevious", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <span class=\"small grey\">Episode ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "number", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</span> - ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" <span class=\"small grey\">  ");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.dateformat),stack1 ? stack1.call(depth0, "aired", options) : helperMissing.call(depth0, "dateformat", "aired", options))));
  data.buffer.push("</span> \n          ");
  hashTypes = {};
  stack2 = helpers['if'].call(depth0, "view.hasNext", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </h2>\n    </div>\n  </div>\n  <!--<div class=\"modal-backdrop\"></div>-->\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n\n            <div class=\"row\">\n              <div class=\"col-lg-12\">  \n                  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("bold")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "user.profile", "activity.user", options) : helperMissing.call(depth0, "linkTo", "user.profile", "activity.user", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push(" watched this.<span class=\"pull-right small\"> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "activity.since", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" </span> \n              </div>\n            </div>\n            <hr/>\n           \n\n          ");
  return buffer;
  }
function program3(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "activity.user.nick", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n          <a class=\"clickable\" ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previous", "", {hash:{
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("> \n            <img class =\"pull-left arrow\" src=\"./img/arrow_left.png\">\n          </a> \n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n          <a class=\"clickable\" ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "next", "", {hash:{
    'target': ("view")
  },contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <img class =\"pull-right arrow\" src=\"./img/arrow_right.png\">\n          </a>\n          ");
  return buffer;
  }

  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});

Ember.TEMPLATES["front/front"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"splash-white\">\n    <div class=\"col-lg-6 col-offset-3 frontpage-backdrop\">\n		\n		<h1 class=\"normal\">");
  hashTypes = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['t']),stack1 ? stack1.call(depth0, "front.title", options) : helperMissing.call(depth0, "t", "front.title", options))));
  data.buffer.push("</h1>\n        <div class=\"row center\">\n        	<div class=\"input-group\">\n	            ");
  hashTypes = {'class': "STRING",'placeholder': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.searchField", {hash:{
    'class': ("form-control search-frontpage"),
    'placeholder': ("Search for anime, episodes, or your mothers maiden name")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	            <span class=\"input-group-btn\">\n	            	<button type=\"button\" class=\"btn btn-default\">\n	            		<span class=\"glyphicon glyphicon-search\"> Search</span>\n	            	</button>\n	      		</span>\n            </div>\n        </div>\n    </div>\n	<br class=\"clear\">\n</div>\n\n<div class=\"container container-splash\">\n	<div class=\"row\">\n		<div class=\"col-lg-6 discover\">\n			<h2><i class=\"glyphicon glyphicon-search\"></i> <span class=\"bold\">Discover</span> new anime</h2>\n			<p>Search and discover new anime based on tags, genres or just plain old\n			recommendations</p>\n		</div>\n		<div class=\"col-lg-6 calendar\">\n			<h2><i class=\"glyphicon glyphicon-calendar\"></i> <span class=\"bold\">Never</span> miss a show airing</h2>\n			<p>Maximize your anime intake with the calendar specifically designed just for you.</p>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"col-lg-6 sync\">\n			<h2><i class=\"glyphicon glyphicon-refresh\"></i> <span class=\"bold\">Sync</span> your library</h2>\n			<p>Have your library up to date anywhere and everywhere you are.</p>\n			<p>With the <a href=\"https://play.google.com/store/apps/details?id=com.banan.anime\">mobile uranime app</a>, your are just a few clicks away from\n			a discussion-winning fact </p>\n                    </div>\n                    <div class=\"col-lg-6 discover\">\n                        <h2><i class=\"glyphicon glyphicon-heart-empty\"></i> <span class=\"bold\">Participate</span> in the community</h2>\n                        <p>The code for this site is open-source and available for everyone. Want to contribute to the site with code, design feedback or typo-fixes? Head on over to our <a href=\"https://github.com/groenlid/uranime-client\">Github site</a>.</p>\n                    </div>\n	</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["notifications/notifications"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("	<a href=\"#\" id=\"notification\" rel=\"popover\" data-title=\"title\" \ndata-content=\"content\">\n		<span class=\"label label-danger\">2</span>\n	</a>\n	<div class=\"popover bottom\" id=\"notifications\" style=\"width:250px\" ");
  hashTypes = {'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'name': ("name")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n		<div class=\"arrow\"></div>\n		<div class=\"popover-inner\">\n			<h3 class=\"popover-title\">Notifications</h3>\n			<div class=\"popover-content\">\n				<div class=\"row\">\n					<div class=\"col-lg-2\">\n						<img src=\"http://gravatar.com/avatar/79bf7c793958b269fc2ad82c1c36afd7.jpg?s=20&r=pg\">\n					</div>\n					<div class=\"col-lg-8\">\n						<small><a href=\"#\">Larseknu</a> commented on episode 14 of bleach</small>\n					</div>\n				</div>\n				<hr>\n				<div class=\"row\">\n					<div class=\"col-lg-2\">\n						<img src=\"http://gravatar.com/avatar/79bf7c793958b269fc2ad82c1c36afd7.jpg?s=20&r=pg\">\n					</div>\n					<div class=\"col-lg-8\">\n						<small><a href=\"#\">Larseknu</a> commented on episode 14 of bleach</small>\n					</div>\n				</div>\n				<p></p>\n			</div>\n		</div>\n	</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["requests/request"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n	<div class=\"anime-gallery request\">\n        <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("fanart")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n	</div>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n            <div class=\"col-lg-4 pull-left\">\n                <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("poster")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(" />\n            </div>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n    		<table class=\"table table-striped table-small col-lg-12\">\n    			<thead>\n                    <tr>\n                        <th class=\"col-lg-3\">Site</th>\n                        <th class=\"col-lg-3\">Season/Episodes</th>\n                        <th class=\"col-lg-3\">Comment</th>\n                        <th class=\"col-lg-3\">Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "info", "in", "request_info", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </tbody>\n    		</table>\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n                        ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "attribute", "in", "info.request_attributes", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n\n                            <tr>\n                                <td ");
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("info.scrape_id::muted")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                                ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "info.scrape_id", {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                                <td>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "attribute.value", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</td>\n                                <td><i class=\"icon-comment\"></i></td>\n                                <td><i class=\"icon-edit\"></i> Edit</td>\n                            </tr>\n\n                        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                                    <a ");
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("info.site.url")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "info.site.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n                                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                                    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "info.site.name", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                                ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-lg-8 pull-right content\">\n    ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "showImage", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	<h2>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n	<div class=\"row\">\n        ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "poster", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div ");
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("poster:col-lg-7:col-lg-12")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            ");
  hashTypes = {};
  stack1 = helpers.unless.call(depth0, "emptyRequestInfo", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n	</div>\n	<hr />\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["requests/requests"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n						<tr>\n							<td colspan=\"2\">\n								");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "request", "request", options) : helperMissing.call(depth0, "linkTo", "request", "request", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n							</td>\n						</tr>\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes;
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "request.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<div class=\"container margin-top\">\n	<div class=\"row\">\n		<div class=\"col-lg-4\">\n			<table class=\"content table table-hover table-striped pull-left\">\n				<thead>\n					<tr>\n						<th class=\"col-lg-10\">Anime request</th>\n						<th class=\"col-lg-2\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.length", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n					</tr>\n				</thead>\n				<tbody>\n					");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "request", "in", "pagedContent", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					<tr>\n						<td colspan=\"2\">\n							");
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.PaginatorCollectionView", {hash:{
    'contentBinding': ("controller.paginator")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n						</td>\n					</tr>\n				</tbody>\n			</table>\n		</div>\n		");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["requests/requestsIndex"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Content");
  
});

Ember.TEMPLATES["search/search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                <a class=\"btn\" ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeViewType", "", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n                    <i ");
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("icon")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>\n                </a>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"container content infobar searchBar\">\n<div class=\"row\">\n        <h1 class=\"col-lg-6\"><span class=\"normal\">Found</span> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.content.length", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" <span class=\"normal\">results matching your query</span></h1>\n        <div class=\"btn-group pull-right\" style=\"margin-left:10px;\">\n            ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "viewTypes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"col-lg-2 pull-right\">\n            <div class=\"col-lg-5 line-height-input\">Sort by: </div>\n            <div class=\"col-lg-7\">\n            ");
  hashTypes = {'contentBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'selectionBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("sortTypes"),
    'optionLabelPath': ("content.label"),
    'optionValuePath': ("content.value"),
    'selectionBinding': ("chosenSort")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container content\">\n  ");
  hashTypes = {'viewTypeBinding': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.AnimeListView", {hash:{
    'viewTypeBinding': ("controller.searchResults.viewType"),
    'contentBinding': ("controller")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n<div class=\"clear\"></div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["search/searchForm"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n                    ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "isLoaded", {hash:{},inverse:self.program(6, program6, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n                        ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "row", "in", "", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n                                ");
  hashTypes = {'tagName': "STRING",'class': "STRING"};
  options = {hash:{
    'tagName': ("div"),
    'class': ("row")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "row", options) : helperMissing.call(depth0, "linkTo", "anime.description", "row", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n                                        ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "row.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("               \n                                ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n                        <div class=\"row text-align-center\">\n                                <span class=\"loading\"></span>\n                        </div>\n                    ");
  }

  data.buffer.push("<div class=\"popover bottom\" id=\"notifications\" style=\"width:250px;display: block;\" data-bindattr-1=\"1\">\n        <div class=\"arrow\"></div>\n        <div class=\"popover-inner\">\n            <div class=\"popover-title\">\n                ");
  hashTypes = {'class': "STRING",'placeholder': "STRING",'valueBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.searchField", {hash:{
    'class': ("form-control"),
    'placeholder': ("Search for anime"),
    'valueBinding': ("view.value")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            </div>\n            <div class=\"popover-content searchresult\">\n                ");
  hashTypes = {};
  stack1 = helpers['with'].call(depth0, "view.result", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n");
  return buffer;
  
});

Ember.TEMPLATES["user/library/library"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n        ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controllers.user.content.nick", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n        <li><a ");
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setSorting", "btn", {hash:{
    'target': ("controller")
  },contexts:[depth0,depth0],types:["ID","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"clickable\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "btn.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</a></li>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, options;
  data.buffer.push("\n\n  <div class=\"anime-gallery gallery-poster pull-left\">\n    <div class=\"gallery-image\">\n      ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "anime.description", "item.anime", options) : helperMissing.call(depth0, "linkTo", "anime.description", "item.anime", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n    <p>");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.anime.title", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n  </div>\n\n");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashTypes;
  data.buffer.push("\n        <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("item.anime.imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n        ");
  hashTypes = {};
  stack1 = helpers['if'].call(depth0, "item.incomplete", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n        <div class=\"backdrop\">\n          <div class=\"unseen-episodes\">");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.progress", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("/");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.total", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n          <div class=\"smallprogress\">\n            <div class=\"smallprogress-filled\" ");
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("item.percentStyle")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            </div>\n          </div>\n        </div>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"content container\">\n  <ul class=\"breadcrumb\">\n    <li>\n      ");
  hashTypes = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "user.profile", "controllers.user.content", options) : helperMissing.call(depth0, "linkTo", "user.profile", "controllers.user.content", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </li>\n    <li class=\"active\">Library</li>\n  </ul>\n\n<div class=\"row\">\n  <div class=\"pull-left\">\n    <div class=\"btn-group\">\n		<a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n			Sort by\n			<span class=\"caret\"></span>\n		</a>\n		<ul class=\"dropdown-menu\">\n			<!-- dropdown menu links -->\n      ");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "btn", "in", "controller.sortButtons", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</ul>\n	</div>\n	</div>\n    <div class=\"btn-group pull-left\" style=\"margin-left:10px;\">\n      <a class=\"btn\">\n          <i class=\"glyphicon glyphicon-th\"></i>\n      </a>\n      <a class=\"btn\">\n          <i class=\"glyphicon glyphicon-th-large\"></i>\n      </a>\n      <a class=\"btn\">\n          <i class=\"glyphicon glyphicon-th-list\"></i>\n      </a>\n    </div>\n    <div class=\"col-lg-4 pull-right\">\n      <ul style=\"list-style-type: none;\">\n        <li>\n          <i class=\"glyphicon glyphicon-time\"></i> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.seenTime", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" spent watching anime\n        </li>\n        <li>\n          <i class=\"glyphicon glyphicon-eye-open\"></i> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.seenEpisodes", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" episodes seen\n        </li>\n        <li>\n          <i class=\"glyphicon glyphicon-film\"></i> ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "controller.content.length", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" anime seen\n        </li>\n      </ul>\n    </div>\n  </div>\n<div class=\"anime-gallery anime-library row\">\n\n");
  hashTypes = {};
  stack2 = helpers.each.call(depth0, "item", "in", "controller.pagedContent", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n\n");
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.PaginatorCollectionView", {hash:{
    'contentBinding': ("controller.paginator")
  },contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n<br class=\"clear\">\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["user/user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes;
  data.buffer.push("\n        <div class=\"userseen\">\n          <a ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", "episodemodal", "uep.episode", {hash:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"clickable\">\n            <img ");
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("uep.episode.imageURL")
  },contexts:[],types:[],hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n          </a>\n          <div class=\"border-image\"></div>\n        </div>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"black-top\">\n    <header id=\"fanart\" class=\"small\" style=\"\">\n      ");
  hashTypes = {};
  stack1 = helpers.each.call(depth0, "uep", "in", "content.userepisodes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </header>\n</div>\n\n");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<!--\n\n  <div class=\"black-top\">\n    <header id=\"fanart\" class=\"small\" style=\"\">\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/9/6808.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/9/4562.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/9/4561.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/9/4560.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/99/4726.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/99/4725.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/749/20221.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/638/18124.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/photos/orginal/4f6d1777-eeac-4791-ba43-5a959e27ab78.jpg\">\n      </div>\n      <div class=\"userseen\">\n        <img src=\"http://urani.me/attachments/episodes/784/21273.jpg\">\n      </div>\n    </header>\n</div>\n-->\n");
  return buffer;
  
});