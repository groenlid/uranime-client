App.EpisodemodalController = App.ModalController.extend({
	actions: {
		toggleEpisodeSeen: function(episode){
			episode.toggleProperty('seen');
			episode.save();
		}
	}
});
