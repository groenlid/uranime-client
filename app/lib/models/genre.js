App.Genre = DS.Model.extend({
        
    name: DS.attr('string'),
	description: DS.attr('string'),
	is_genre: DS.attr('number'),
    
    anime: DS.belongsTo('App.Anime'),
        
    didLoad: function(){
       
    }
});
