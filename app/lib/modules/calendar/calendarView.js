require('moment');

App.CalendarView = Em.View.extend({
  templateName: "uranime/~templates/calendar/calendar",

  queryBinding: 'controller.content.query.week',

  

});