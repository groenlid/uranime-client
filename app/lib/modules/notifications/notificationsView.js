App.NotificationsView = Em.View.extend({
     name: 'myPopover',
     tagName: "li",
     classNames:['relative'],
     
     templateName: 'uranime/~templates/notifications/notifications',
     click: function(event) {
     	event.preventDefault();
     	console.log(event);
     	$("#notifications").toggle();
     }         
});
