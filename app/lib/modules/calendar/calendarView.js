require('moment');
App.CalendarView = Em.View.extend({
  templateName: "uranime/~templates/calendar/calendar",

  queryBinding: 'controller.content.query.week',

  lastWeek: function(){
  	var now = moment(this.get('query'), 'YYYY-MM-DD');
  	return now.subtract('days', 7).format('YYYY-MM-DD');
  }.property('query'),

  nextWeek: function(){
  	var now = moment(this.get('query'), 'YYYY-MM-DD');
  	return now.add('days', 7).format('YYYY-MM-DD');
  }.property('query')

});