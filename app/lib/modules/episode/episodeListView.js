require('uranime/modules/episode/episodeModalView');
App.EpisodeListView = Ember.CollectionView.extend({

	itemViewClass: Ember.View.extend({
		templateName: 'uranime/~templates/episode/episodeListItem',

		showEpisode: function (episode){
			App.EpisodeView.popup({content:episode});
		}

	})

});