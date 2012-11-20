App.Genre = DS.Model.extend({
        
    name: DS.attr('string'),
	description: DS.attr('string'),
	is_genre: DS.attr('boolean'),
    
    anime: DS.belongsTo('App.Anime'),
        
    didLoad: function(){
        console.log('Genre loaded̈́', this.toJSON());
    }
});
