require('uranime/modules/episode/episodeModalView');
App.EpisodeListView = Ember.CollectionView.extend(App.PaginationMixin,{

	total: function(){
		return this.get('complete.length');
	}.property('complete.length'),
	
	rangeStart: 0,
	rangeWindowSize: 10,

	content: function(){
		return this.get('complete').toArray().slice(this.get('rangeStart'), this.get('rangeStop'));
	}.property('complete'),

	itemViewClass: Ember.View.extend({
		templateName: 'uranime/~templates/episode/episodeListItem',

		showEpisode: function (episode){
			App.EpisodeView.popup({content:episode});
		}

	})

});