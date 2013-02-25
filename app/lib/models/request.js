App.Request = DS.Model.extend({
	title: DS.attr('string'),
	type: DS.attr('string'),
	comment: DS.attr('string'),
	ip_adress: DS.attr('string'),
	poster: DS.attr('string'),
	fanart: DS.attr('string'),

	request_info: DS.hasMany('App.RequestInfo'),
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
	}.property('percentage'),

	fanartStyle: function(){
		return "background-image:url("+this.get('fanart')+")";
	}.property('fanart')

}).reopenClass({
	addRoot:true
});

