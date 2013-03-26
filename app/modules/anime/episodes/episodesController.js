App.AnimeEpisodesController = Ember.ArrayController.extend(Ember.PaginationSupport, {

	totalBinding: 'anime.episodes.length',

	maxPaginationLinks: 10,
  
  	rangeWindowSize: 10,

  	sortProperties:['aired','number'],
  	sortAscending: false,

  	// anime property is set in router
  	contentBinding: 'anime.episodes',


  	pagedContent: function(){
    var rStart = this.get('rangeStart'),
        rStop  = this.get('rangeStop'); 
    
    return this.get('arrangedContent').slice(rStart,rStop);

  }.property('rangeStart','rangeStop', 'sortProperties'),

});