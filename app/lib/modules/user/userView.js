App.UserView = Em.View.extend({
  templateName: "uranime/~templates/user/user",

  showEpisode: function (episode){
      App.EpisodeView.popup({content:episode});
  },


  didInsertElement: function(){
    console.log("inserted userview");
  }
});