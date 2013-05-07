App.UserView = Em.View.extend({
  templateName: "user/user",

  showEpisode: function (episode){
      App.EpisodeView.popup({content:episode, controller: this.get('controller')});
  },


  didInsertElement: function(){
    console.log("inserted userview");
  }
});
