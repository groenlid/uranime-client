App.AnimeEpisodesView = Em.View.extend({
	templateName: "anime/episodes/animeEpisodes",

	didInsertElement: function(){
		this.get('controller').set('rangeStart',0);
	}
});
