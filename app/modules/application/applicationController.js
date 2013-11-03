App.ApplicationController = Ember.Controller.extend({
    
    date: moment().format(App.Config.serverDateFormat),
    
    overviewDate: {
        after: '2011-01-01',
        before: '2011-05-01'
    }
});
