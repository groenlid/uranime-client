App.RequestInfo = DS.Model.extend({
	scrape_id: DS.attr('number'),
	scrape_comment: DS.attr('string'),

	request: DS.belongsTo('request'),
	request_attributes: DS.hasMany('requestAttribute'),
	site: DS.belongsTo('site')

});