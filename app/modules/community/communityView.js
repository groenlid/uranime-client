App.CommunityView = Em.View.extend({
  templateName: "community/community",

  goToAnimeByEpisode: function(e,a){
    console.log("going to anime");
    var id = e.get("anime.id");
    App.get('store').find(App.Anime,{id:id});
    App.get('Router').transitionTo('anime', {id: id});
  }
});
