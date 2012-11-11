App.Anime = DS.Model.extend({
	
	title: DS.attr('string'),
	desc: DS.attr('string'),
	image: DS.attr('string'),
	fanart: DS.attr('string'),
	status: DS.attr('string'),
	runtime: DS.attr('number'),
	classification: DS.attr('string'),
	type: DS.attr('string'),

});
