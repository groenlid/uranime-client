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
		return Ember.none(image) || Ember.none(this.get('anime.id')) 
            ? this.get('anime.fanartURL') 
            : App.Config.get('episodepath') + this.get('anime.id') + '/' + this.get('image');
	}.property('image', 'anime.id'),
        
    didLoad: function(){
        console.log('Episode loaded̈́', this.toJSON());
    }
});
