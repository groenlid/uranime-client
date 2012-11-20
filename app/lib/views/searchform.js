require('uranime/core');

App.SearchFormView = Ember.TextField.extend(Ember.TargetActionSupport, {
	tagName: "form",
	valueBinding: 'App.SearchFormController.searchText',
	searchQuery: '',
	submit: function(event) {
		event.preventDefault();
		App.get('router').send('goToSearch', {
			query: this.get("searchQuery")
		});
	}
});
