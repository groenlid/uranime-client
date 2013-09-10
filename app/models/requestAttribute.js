App.RequestAttribute = DS.Model.extend({
	value: DS.attr('string'),

	type: DS.belongsTo('requestType'),

});