App.CalendarController = Ember.ArrayController.extend({
  // Sunday - Saturday
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednsday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,

  sundayEpisodes: function(){
    return this.filteredEpisodes(this.getDateInWeek(this.sunday));
  }.property('sunday', 'content'),

  getDateInWeek: function(day){
    var now = this.get('controller.query')();
    if(now.day() > day)
      now.subtract('days',now.day() - day);
    else
      now.add('days',day - now.day());
    return now.format(App.Config.get('serverDateFormat'));
  },

  filteredEpisodes: function(day){
    var c = this.get('content');
    return c.filter(function(data){
      return moment(data.get('aired')).format(App.Config.get('serverDateFormat')) == day;
    });
  },
});