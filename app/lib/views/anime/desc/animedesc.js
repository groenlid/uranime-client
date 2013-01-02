App.AnimeDescView = Em.View.extend({
	templateName: "uranime/~templates/animedesc",
  showEpisode: function (evt){
      var episode = evt.context;
      App.EpisodeView.popup({content:episode});
  },

  showTags: false,

  toggleTags: function(evt){
    this.toggleProperty('showTags');
  }
});
