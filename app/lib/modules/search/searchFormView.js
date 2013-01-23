require('uranime/core');

App.SearchFormView = Ember.TextField.extend(Ember.TargetActionSupport, {
	tagName: "form",
	valueBinding: 'App.SearchFormController.searchText',
	searchQuery: '',
	submit: function(event) {
		var searchQuery = this.get('searchQuery');
		event.preventDefault();
		this.get('controller').send('search', {query:searchQuery});
		//App.get('Router.router').transitionTo('search', this.get('searchQuery'));//{query: this.get('searchQuery')});//App.Anime.find({title: this.get('searchQuery')}));
    /*App.get('router').send('goToSearch', {
			query: this.get("searchQuery")
		});*/
	}
});
