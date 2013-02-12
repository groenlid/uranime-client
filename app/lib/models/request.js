App.Request = DS.Model.extend({
	title: DS.attr('string'),
	type: DS.attr('string'),
	desc: DS.attr('string'),
	image: DS.attr('string'),
	fanart: DS.attr('string'),

	user: DS.belongsTo('App.User'), 
	status: DS.attr('string'),
	percentage: DS.attr('number'),

	labelclass: function(){
		var percentage = this.get('percentage');
		if(percentage >= 70)
			return 'badge-success';
		else if(percentage >= 40)
			return 'badge-warning';
		else
			return 'badge-important';
	}.property('percentage')
});