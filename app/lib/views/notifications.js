App.NotificationsView = Em.View.extend({
     name: 'myPopover',
     tagName: "li",
     templateName: 'uranime/~templates/notifications',
     click: function(event) {
     	event.preventDefault();
     	console.log(event);
     	$("#notifications").toggle();
     }         
});
