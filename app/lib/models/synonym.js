App.Synonym = DS.Model.extend({
        
    title: DS.attr('string'),
	lang: DS.attr('string'),

    
    anime: DS.belongsTo('App.Anime'),
        
    didLoad: function(){
        console.log('Synonym loaded̈́', this.toJSON());
    }
});
