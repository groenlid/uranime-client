
var attributes = Ember.merge({
    // useful Test defaults
    rootElement: '#ember-testing',
    LOG_ACTIVE_GENERATION:false,
    LOG_VIEW_LOOKUPS: false
}); // but you can override;

Ember.run.join(function(){
    window.App = Ember.Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
});

App.Router.reopen({
    location: 'none'
});

require('app/bootstrap');

//App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

require(/tests\/acceptance\/*/);
require(/tests\/unit\/*/);

