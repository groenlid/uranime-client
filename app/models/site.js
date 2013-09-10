App.Site = DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	url: DS.attr('string'),
	link_id: DS.attr('string')

});