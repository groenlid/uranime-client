App.Request = DS.Model.extend({
	title: DS.attr('string'),
	type: DS.attr('string'),
	comment: DS.attr('string'),
	ip_adress: DS.attr('string'),
	poster: DS.attr('string'),
	fanart: DS.attr('string'),

	request_info: DS.hasMany('requestInfo'),
	user: DS.belongsTo('user'), 
	status: DS.attr('string'),
	percentage: DS.attr('number'),


	sortableId: function(){
		return parseInt(this.get('id'));
	}.property('id'),

	emptyRequestInfo: function(){
		return this.get('request_info.length') == 0;
	}.property('request_info'),                               

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
	}.property('fanart'),

	showImage: function(){
		var fanart = this.get('fanart'),
			poster = this.get('poster');
		
		return !Ember.isNone(fanart) || !Ember.isNone(poster);
	}.property('fanart','poster'),

});

