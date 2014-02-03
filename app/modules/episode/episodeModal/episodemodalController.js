App.EpisodemodalController = App.ModalController.extend({
	actions: {
		markEpisodeAsSeen: function(episode){
			episode.set('seen', true);
			episode.save();
		}
	}
});
