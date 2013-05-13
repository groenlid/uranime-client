App.EpisodeListView = Ember.CollectionView.extend({
 
	itemViewClass: Ember.View.extend({
            templateName: 'episode/episodeListItem',

            showEpisode: function (episode){
                    App.EpisodeView.popup({content:episode, controller: this.get('controller')});
            }

	})

});
