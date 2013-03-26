App.CalendarView = Em.View.extend({
  templateName: "calendar/calendar",

  queryBinding: 'controller.content.query.week',

  showEpisode: function (episode){
      App.EpisodeView.popup({content:episode, controller: this.get('controller')});
  }

});