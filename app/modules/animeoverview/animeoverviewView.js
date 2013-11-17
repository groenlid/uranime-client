App.AnimeoverviewView = Ember.View.extend({
    templateName: 'animeoverview/animeoverview',

    /**
     * Returns an array of clickable years
     */
    years: function(){
        var ret         = [],
            numYears    = 60,
            startOfYear = '-01-01',
            endOfYear   = '-12-31',
            thisYear    = moment().year(),
            params      = this.get('controller.params');

        for(var i = 0; i <= 60; i++)
        {
            var thatYear = thisYear - i,
                before   = moment(thatYear + endOfYear),
                after    = moment(thatYear + startOfYear),
                active;

            ret.push(this.addTime(thatYear, before, after, params));
        }

        return ret;
    }.property('controller.content'),

    /**
     * 
     * */
    seasons: function(){
        var that = this,
            workingDate = moment(),
            seasons = workingDate.seasons,
            params = this.get('controller.params'),
            amount = 5,
            names = ['Upcoming anime','Current anime'],
            ret = [];
        
        workingDate.addSeason();
        
        var seasonStart, seasonEnd, text;

        for(var i = 0; i < amount; i++)
        {
            seasonEnd = moment(workingDate.setEndOfSeason());
            seasonStart = moment(workingDate.setStartOfSeason());
            text = names[i] || that.getSeasonKeyFromValue(workingDate.getSeason()) + ' ' + workingDate.year();
            ret.pushObject(that.addTime(text, seasonEnd, seasonStart, params));
            workingDate.subtractSeason();
        }
        

        return ret;
    }.property('controller.content'),
    
    getSeasonKeyFromValue: function(seasonValue){
        var seasons = moment().seasons,
            key;
        for(var i in seasons)
        {
            if(!seasons.hasOwnProperty(i)) continue;
            if(seasons[i] === seasonValue)
                key = i;
        }
        return key;
    },

    // Functions
    formatDate: function(date){
        return date.format('YYYY-MM-DD');
    },

    addTime: function(title, before, after, params){
        var active; 
        before = this.formatDate(before);
        after = this.formatDate(after);
        
        active = (params.before == before && params.after == after) ?
                            true : false;

        return {
                title: title,
                after: after,
                before: before,
                active: active
            };
    }

});
