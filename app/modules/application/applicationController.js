App.ApplicationController = Ember.Controller.extend({
    
    date: moment().format(App.Config.serverDateFormat),
    
    overviewDate: function(){
        var now = moment(),
            after = moment(now.setStartOfSeason()),
            before = moment(now.setEndOfSeason());

        return {
            after: after.formatSimpleDate(),
            before: before.formatSimpleDate()
        }
    }.property()
});
