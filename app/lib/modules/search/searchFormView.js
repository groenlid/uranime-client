require('uranime/core');

App.SearchFormView = Ember.TextField.extend(Ember.TargetActionSupport, {
	placeholder: 'Search for anime',
	classNames: ['search-query', 'pull-left'],

	insertNewline: function(event) {
		event.preventDefault();
		var searchQuery = this.get('value');
		this.get('controller').send('search', {query:searchQuery});
	},

});
