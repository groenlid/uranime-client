App.UserLibraryController = Ember.ArrayController.extend(Ember.PaginationSupport, {
  
    totalBinding: 'content.length',
  
    needs:['user'],

    maxPaginationLinks: 10,
  
    rangeWindowSize:20,

    sortProperties:['last_seen'],
    sortAscending: false,

    // Dataflow
    paginationInputBinding: 'arrangedContent',

  sortButtons: Ember.A([ 
    Ember.Object.create({
      title: 'Last seen',
      sortProperties: ['last_seen'],
      sortAscending: false
      }),
    Ember.Object.create({
      title: 'Title',
      sortProperties: ['anime.title'],
      sortAscending: true
      }),
    Ember.Object.create({
      title: 'Percentage seen',
      sortProperties: ['percent'],
      sortAscending: true
      })
    ]),

  setSorting: function(sort){
    this.set('sortProperties', sort.get('sortProperties'));
    this.set('sortAscending', sort.get('sortAscending'));
  },

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

