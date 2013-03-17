App.CalendarController = Ember.ObjectController.extend({

  episodes: function(){
    console.log("episodes:",this.get('model'));
    if(Ember.isNone(this.get('model')))
      return Ember.A();
    return App.Episode.find({week:this.get('model')});
  }.property('model'),

  arrangedEpisodes: function(){
    var now, ret = Ember.A(), dayEpisodes, curDay;
    // Fetch the current date
    now = moment(this.get('model'));

    for(var weekday = 0; weekday < 7; weekday++)
    {
      // Each row will contain title and episodes-array
      curDay = Ember.A();
      date = now.day(weekday).format(App.Config.get('serverDateFormat'));
      curDay.pushObject(date);

      // episodes
      dayEpisodes = this.get('episodes').filter(function(data){
        return (!Ember.isNone(data.get('aired')) &&
          moment(data.get('aired')).format(App.Config.get('serverDateFormat')) == date);
      });

      curDay.pushObject(dayEpisodes);

      ret.pushObject(curDay);
    }

    return ret;
  }.property('episodes.@each','model.week','episodes.isLoaded'),

  filteredEpisodes: function(day){
    return this.get('episodes');
    var c = this.get('episodes');
    return c.filter(function(data){
      console.log(data.serialize());
      return moment(data.get('aired')).format(App.Config.get('serverDateFormat')) == day;
    });
  },

  lastWeek: function(){
    var now = moment(this.get('model'), 'YYYY-MM-DD');
    if(now.isValid())
     return now.subtract('days', 7).format('YYYY-MM-DD');
  }.property('model'),

//ONS 06-02-2012
//4

  nextWeek: function(){
    var now = moment(this.get('model'), 'YYYY-MM-DD');
    if(now.isValid())
     return now.add('days', 7).format('YYYY-MM-DD');
  }.property('model'),
});