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

/*
  Creates a new instance of an Ember application and
  specifies what HTML element inside index.html Ember
  should manage for you.
*/
window.App = Ember.Application.create({    
    LOG_STACKTRACE_ON_DEPRECATION : true,
    LOG_BINDINGS                  : true,
    LOG_TRANSITIONS               : true,
    LOG_TRANSITIONS_INTERNAL      : false,
    LOG_VIEW_LOOKUPS              : true,
    LOG_ACTIVE_GENERATION         : true,
    rootElement: window.TESTING ? '#qunit-fixture' : 'body',
    
    
    
    session: Ember.Object.extend({
        init: function(){
            
        },
        
        authTokenChanged: function(){
            
        }.observes('authToken')
    })
});

Ember.onerror = function(error){
    Ember.Logger.assert(false,error.stack);
};

Ember.RSVP.configure('onerror', function(error) {
      Ember.Logger.assert(false, error.stack);
});

if (window.TESTING) {
  window.App.deferReadiness();
}

require('app/authentication');

require('app/translations');

/*
 * The global configuration object
*/
require('app/config');

/*
 * Require the mixins
*/
//require(/app\/mixins.*/g);
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
require(/app\/models\/.*/g);
//require('app/models');
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
