App.RequestsController = Ember.ArrayController.extend(Ember.PaginationSupport,{

	sortProperties: ['sortableId'],
	sortAscending: false,

	totalBinding: 'content.length',

	maxPaginationLinks: 4,
  
  	rangeWindowSize: 10,


  	pagedContent: function(){
    var rStart = this.get('rangeStart'),
        rStop  = this.get('rangeStop'); 
    
    return this.get('arrangedContent').slice(rStart,rStop);

  }.property('rangeStart','rangeStop', 'sortProperties'),
});