App.AnimeDetails = DS.Model.extend({
    episodes: DS.hasMany('episode'),
    genres: DS.hasMany('genre'),
    seen: DS.hasMany('seenActivity'),
    synonyms: DS.hasMany('synonym'),

    /**
    * Filters out all the tags and only returns the genres
    * @property genres
    */
    onlyGenres: function(){
        return this.get('genres').filterProperty('is_genre');
    }.property('genres.@each'),

    onlyTags: function(){
        return this.get('genres').filterProperty('is_genre',0);
    }.property('genres.@each'),

    /**
    * Should return the [next episode + last 3] or [last 4]
    */
    lastEpisodes: function() {
        var episodes = this.get('sortedEpisodes').toArray();
        var amount = 4;

        var lastAiredEpisodes = [];
        var last;
        episodes.forEach(function(item){
            if(lastAiredEpisodes.length >= amount || Ember.isNone(item))
                return;
          
          // Check if the episode is after todays date "2010-01-07T00:00:00+0100"
          if(!Ember.isNone(item.get('aired')) && moment(item.get('aired'), App.Config.serverDateFormat).diff(moment()) < 1)
          {
            // If the lastAiredEpisodes is empty and last is defined
            if(lastAiredEpisodes.length == 0 && !Ember.isNone(last))
              lastAiredEpisodes.push(last);
            lastAiredEpisodes.push(item);
          }
          last = item;
    });

    return lastAiredEpisodes;
    }.property('episodes.@each'),

    sortedEpisodes: function () {
    var items = this.get('episodes').toArray();
    if(items.length == 0)
      return items;
    return items.sort(function (lhs, rhs) {
     return moment(rhs.get('aired'), App.Config.serverDateFormat).diff(moment(lhs.get('aired'), App.Config.serverDateFormat));
    });
    }.property('episodes.@each'),

    hasFutureEpisodes: function() {
    var episodesAirDate = this.get('episodes').getEach('aired');
    var hasFuture = false;

    episodesAirDate.forEach(function(content){
        if(!Ember.isNone(content) && new Date(content) > new Date())
            hasFuture = true;
    });

    return hasFuture;
    }.property('episodes.@each.aired'),

    totalRuntime: function(){
    return this.get('runtime') * this.get('episodes.length');
    }.property('episodes.length','runtime'),

    specialEpisodes: function(){
    return this.get('episodes').filterProperty('special',true).get('length');
    }.property('episodes.@each.special'),

    regularEpisodes: function(){
    return this.get('episodes.length') - this.get('specialEpisodes');
    }.property('specialEpisodes','episodes.length'),

    toFromDates: function(){
    var sortedEpisodes = this.get('sortedEpisodes'), 
        start = moment(sortedEpisodes.get('lastObject.aired'), App.Config.serverDateFormat).year(), 
        end = moment(sortedEpisodes.get('firstObject.aired'), App.Config.serverDateFormat).year();

    if(start == end)
      return "(" + start + ")";
    if(this.get('isFinished'))
        return "(" + start + "-" + end + ")";
    else
      return "(" + start + "- )";
    }.property('episodes.@each.aired'),


    });
