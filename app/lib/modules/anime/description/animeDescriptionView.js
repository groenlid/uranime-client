App.AnimeDescriptionView = Em.View.extend({
	templateName: "uranime/~templates/anime/description/animeDescription",
  showEpisode: function (episode){
      App.EpisodeView.popup({content:episode});
  },

  showTags: false,

  toggleTags: function(evt){
    this.toggleProperty('showTags');
  }
});
