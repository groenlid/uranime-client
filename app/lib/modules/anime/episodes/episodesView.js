App.AnimeEpisodesView = Em.View.extend({
	templateName: "uranime/~templates/anime/episodes/animeEpisodes",

	didInsertElement: function(){
		this.get('controller').set('rangeStart',0);
	}
});
