App.AnimeDescView = Em.View.extend({
	templateName: "uranime/~templates/animedesc",
  showEpisode: function (evt){
      var episode = evt.context;
      App.EpisodeView.popup({content:episode});
  },

  setPopover: function(){
     $('.genre').popover();
    $('.tag').popover();
    console.log("setting popover");
  }.observes('content'),

  didInsertElement: function(){
    $('.genre').popover();
    $('.tag').popover();
    console.log("genres", this.get('content.genres.length'));
  }
});
