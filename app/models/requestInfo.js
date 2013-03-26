App.RequestInfo = DS.Model.extend({
	scrape_id: DS.attr('number'),
	scrape_comment: DS.attr('string'),

	request: DS.belongsTo('App.Request'),
	request_attributes: DS.hasMany('App.RequestAttribute'),
	site: DS.belongsTo('App.Site')

});