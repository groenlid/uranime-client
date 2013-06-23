/*
 * Hey! This is an Ember application. It's built using a 
 * neuter task (see this project's Gruntfile for what that means).
 *
 * `require`s in this file will be stripped and replaced with
 * the string contents of the file they refer to wrapped in
 * a closure.
 *
 * Each file contains its own commenting, so feel free to crack
 * them open if you want more information about what is going on.
*/

/*
 * These are the dependencies for an Ember application
 * and they have to be loaded before any application code.
*/
require('dependencies/jquery-1.8.3');
require('dependencies/moment');

/*
 * Since we're precompiling our templates, we only need the
 * handlebars-runtime microlib instead of the
 * entire handlebars library and its string parsing functions.
*/
require('dependencies/handlebars');

require('dependencies/ember');

require('dependencies/ember-data');

/*
 * Translation library
*/
require('dependencies/cldr-1.0.0');
require('dependencies/i18n');

require('dependencies/bootstrap');
require('dependencies/ember-bootstrap');

/*
  this file is generated as part of the build process.
  If you haven't run that yet, you won't see it.

  It is excluded from git commits since it's a 
  generated file.
*/
require('dependencies/compiled/templates');

/*
  Creates a new instance of an Ember application and
  specifies what HTML element inside index.html Ember
  should manage for you.
*/
window.App = Ember.Application.create({
  rootElement: window.TESTING ? '#qunit-fixture' : 'body'
});

if (window.TESTING) {
  window.App.deferReadiness();
}

require('app/translations');

/*
 * The global configuration object
*/
require('app/config');

/*
 * Require the mixins
*/
require('app/mixins');

/*
 * Common helpers
*/
require('app/common/helpers/dateformat');

/* 
 * Model layer. 
 * Ember.Object itself provides most of what
 * model layers elsewhere provide. Since TodoMVC
 * doesn't communicate with a server, plain
 * Ember.Objects will do.
*/
require('app/models');
require('app/store/store');

/*
 * Views for the application
*/
require('app/views');


/*
 * The applications' controlers
*/
require('app/controllers');

/* 
 * States (i.e. Routes)
 * Handles serialization of the application's current state
 * which results in view hierarchy updates. Responds to
 * actions.
*/
require('app/router/router');
