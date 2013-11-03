App.AnimeoverviewView = Ember.View.extend({
    templateName: 'animeoverview/animeoverview',

    years: function(){
        var ret         = [],
            numYears    = 60,
            startOfYear = '-01-01',
            endOfYear   = '-12-31',
            thisYear    = new Date().getFullYear();

        for(var i = 0; i <= 60; i++)
        {
            var thatYear = thisYear - i;
            ret.push({
                title: thatYear,
                after: thatYear + startOfYear,
                before: thatYear + endOfYear
            });
        }

        return ret;
    }.property()

});
