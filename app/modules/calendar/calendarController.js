App.CalendarController = Ember.ArrayController.extend({

  episodesBinding: 'content',

  arrangedEpisodes: function(){
    var now, ret = Ember.A(), dayEpisodes, curDay, date, show;
    // Fetch the current date
    now = moment(this.get('params.week'));

    for(var weekday = 0; weekday < 7; weekday++)
    {
      // Each row will contain title and episodes-array
      curDay = Ember.A();
      date = now.day(weekday).format(App.Config.serverDateFormat);
      show = now.diff(now.day(weekday),'days') == 0;
      
      curDay.pushObject(Ember.Object.create({
        date: date,
        weekday: now.day(weekday).format('dddd'),
        show: show
      }));

      // episodes
      dayEpisodes = this.get('episodes').filter(function(data){
        return (!Ember.isNone(data.get('aired')) &&
          moment(data.get('aired')).format(App.Config.serverDateFormat) == date);
      });

      curDay.pushObject(dayEpisodes);

      ret.pushObject(curDay);
    }

    return ret;
  }.property('episodes.@each','params.week','episodes.isLoaded'),

  filteredEpisodes: function(day){
    return this.get('episodes');
    var c = this.get('episodes');
    return c.filter(function(data){
      console.log(data.serialize());
      return moment(data.get('aired')).format(App.Config.serverDateFormat) == day;
    });
  },

  lastWeek: function(){
    var now = moment(this.get('params.week'), 'YYYY-MM-DD');
    if(now.isValid())
     return now.subtract('days', 7).format('YYYY-MM-DD');
  }.property('params'),

  lastWeekLink : function(){
    var lastWeek = this.get('lastWeek'),
      m = moment(lastWeek, 'YYYY-MM-DD');
    return lastWeek + ' - ' + m.add('days',7).format('YYYY-MM-DD');
  }.property('lastWeek'),

//ONS 06-02-2012
//4

  nextWeek: function(){
    var now = moment(this.get('params.week'), 'YYYY-MM-DD');
    if(now.isValid())
     return now.add('days', 7).format('YYYY-MM-DD');
  }.property('params'),

  nextWeekLink : function(){
    var nextWeek = this.get('nextWeek'),
      m = moment(nextWeek, 'YYYY-MM-DD');
    return nextWeek + ' - ' + m.add('days',7).format('YYYY-MM-DD');
  }.property('nextWeek')


});
