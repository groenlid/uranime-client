window.App = Ember.Application.create({    
    LOG_STACKTRACE_ON_DEPRECATION : true,
    LOG_BINDINGS                  : true,
    LOG_TRANSITIONS               : true,
    LOG_TRANSITIONS_INTERNAL      : false,
    LOG_VIEW_LOOKUPS              : true,
    LOG_ACTIVE_GENERATION         : true,
});

require('app/bootstrap');
