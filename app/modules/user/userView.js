App.UserView = Em.View.extend({
  templateName: "user/user",

  showEpisode: function (episode){
      App.EpisodeView.popup({content:episode});
  },


  didInsertElement: function(){
    console.log("inserted userview");
  }
});