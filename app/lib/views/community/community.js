App.CommunityView = Em.View.extend({
  templateName: "uranime/~templates/community/community",

  showEpisode: function (evt){
      var episode = evt.context;
      App.EpisodeView.popup({content:episode});
  },

  goToAnimeByEpisode: function(e,a){
    console.log("going to anime");
    var id = e.context.get("anime.id");
    App.get('store').find(App.Anime,{id:id});
    App.get('router').send('goToAnime', {id: id});
  }
});
