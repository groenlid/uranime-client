require('uranime/mixins/paginationMixin');
App.UserLibraryController = Ember.ArrayController.extend(Ember.PaginationSupport, {
  
  totalBinding: 'content.length',

  pagedContent: function(){
    var rStart = this.get('rangeStart'),
        rStop  = this.get('rangeStop'); 
    
    return this.get('content').slice(rStart,rStop);

  }.property('rangeStart','rangeStop'),

  needs: 'user',

  seenEpisodes: function(){
    var sum,
        progress = this.get('content').getEach('progress');
    if(Ember.isEmpty(progress))
      return 0;

    sum = progress.reduce(function(prevVal, item) {
       return (prevVal || 0) + item;
    });

    return (sum || 0);
  }.property('content.@each.progress'),

  seenMinutes: function(){
    var minutes = 0, runtime, progress;

    this.get('content').forEach(function(lItem){
    
      runtime = lItem.get('anime.runtime'),
      progress = lItem.get('progress');
      if(Ember.isNone(runtime) || Ember.isNone(progress)) { return };
      minutes += progress * runtime; 
    
    });
    
    return minutes;
  }.property('content.@each.anime.runtime', 'content.@each.progress'),

  seenTime: function(){
    return this.convertTime(this.get('seenMinutes'));
  }.property('seenMinutes'),

  convertTime: function (minutes){
    var duration = moment.duration(minutes, "minutes"), 
        days = parseInt(duration.asDays()), 
        hours = duration.hours(), 
        minutes = duration.minutes(),
        ret = "";


    if(days != 0)
      ret += days + "d, ";
    if(hours != 0)
      ret += hours + "h, ";
    ret += minutes + "min";

    return ret;
  }
});

