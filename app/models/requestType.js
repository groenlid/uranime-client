App.RequestType = DS.Model.extend({
	type: DS.attr('string'),
	description: DS.attr('string')

}).reopenClass({
	url:'requestTypes',
	addRoot: true
});