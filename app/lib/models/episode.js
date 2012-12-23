App.Episode = DS.Model.extend({
        
    name: DS.attr('string'),
  	number: DS.attr('number'),
  	aired: DS.attr('string'),
  	special: DS.attr('boolean'),
  	description: DS.attr('string'),
  	image: DS.attr('string'),
    
    anime: DS.belongsTo('App.Anime'),

    imageURL: function(){
		var image = this.get('image');
		return Ember.none(image) || Ember.none(this.get('anime.id')) ? 
      this.get('anime.fanartURL') : 
      App.Config.get('episodepath') + this.get('anime.id') + '/' + this.get('image');
	}.property('image', 'anime.id'),
    
	parseAired: function(){
		return moment(this.get('aired')).calendar();
	}.property('aired'),

	shortDescription: function(){
		var desc = this.get('description');
		if(Ember.none(desc) || desc.length <= App.Config.get('shortDescriptionLength'))
			return desc;
		
		return desc.substr(0, App.Config.get('shortDescriptionLength')) + "...";

	}.property('shortDescription', 'App.Config.shortDescriptionLength'),

    didLoad: function(){
       
    }
});
