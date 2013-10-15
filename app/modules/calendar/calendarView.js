App.CalendarView = Em.View.extend({
    templateName: "calendar/calendar",

    queryBinding: 'controller.content.query.week',

    actions: {
        toggleDay: function(day){
            day.get('firstObject').toggleProperty('show');
        }
    }
});
