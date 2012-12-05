App.PaginationMixin = Ember.Mixin.create({
	
	total: 0,
	rangeStart: 0,
	rangeWindowSize: 10,

	rangeStop: Ember.computed('total','rangeStart','rangeWindowSize', function(){
		var rangeStop = Ember.get(this, 'rangeStart') + Ember.get(this, 'rangeWindowSize'),
		total = Ember.get(this, 'total');

		if (rangeStop < total)
			return rangeStop;
		return total;
	}).cacheable(),

	page: Ember.computed('rangeStart', 'rangeWindowSize', function(){
		return (Ember.get(this, 'rangeStart') / Ember.get(this, 'rangeWindowSize')) + 1;
	}).cacheable(),

	totalPages: Ember.computed('total', 'rangeWindowSize', function(){
		return Math.ceil(Ember.get(this, 'total') / Ember.get(this, 'rangeWindowSize'));
	}).cacheable(),

	hasPrevious: Ember.computed('rangeStart', function() {
    	return Ember.get(this, 'rangeStart') > 0;
  	}).cacheable(),

	/**
	*/
	hasNext: Ember.computed('rangeStop', 'total', function() {
		return Ember.get(this, 'rangeStop') < Ember.get(this, 'total');
	}).cacheable(),

	/**
	*/
	didRequestRange: Ember.K,

	/**
	*/
	nextPage: function() {
		if (Ember.get(this, 'hasNext')) {
		  this.incrementProperty('rangeStart', Ember.get(this, 'rangeWindowSize'));
		}
	},

	/**
	*/
	previousPage: function() {
		if (Ember.get(this, 'hasPrevious')) {
		  this.decrementProperty('rangeStart', Ember.get(this, 'rangeWindowSize'));
		}
	},

	rangeDidChange: Ember.observer(function() {
		this.didRequestRange(Ember.get(this, 'rangeStart'), Ember.get(this, 'rangeStop'));
	}, 'rangeStart', 'rangeStop')
});