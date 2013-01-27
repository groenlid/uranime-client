App.CommunityView = Em.View.extend({
  templateName: "uranime/~templates/community/community",

  showEpisode: function (episode){
      App.EpisodeView.popup({content:episode});
  },

  something: function(){
    console.log(this.get('controller.content').getEach('anime.title'));
  }.observes('controller.@each.anime'),

  goToAnimeByEpisode: function(e,a){
    console.log("going to anime");
    var id = e.get("anime.id");
    App.get('store').find(App.Anime,{id:id});
    App.get('Router').transitionTo('anime', {id: id});
  }
});
