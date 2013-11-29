Ember.onerror = function(error){
    Ember.Logger.assert(false,error.stack);
};

Ember.RSVP.configure('onerror', function(error) {
      Ember.Logger.assert(false, error.stack);
});

require('app/authentication');

require('app/translations');

/*
 * The global configuration object
*/
require('app/config');
require(/app\/extensions\/.*/);
/*
 * Require the mixins
*/
//require(/app\/mixins.*/g);
require('app/mixins');

/*
 * Common helpers
*/
require('app/common/helpers/dateformat');
require('app/common/helpers/concat');

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
require(/app\/.*Controller/);
//require('app/controllers');

/* 
 * States (i.e. Routes)
 * Handles serialization of the application's current state
 * which results in view hierarchy updates. Responds to
 * actions.
*/
require('app/router/router');
