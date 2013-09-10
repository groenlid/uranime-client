App.Synonym = DS.Model.extend({
        
  title: DS.attr('string'),
	lang: DS.attr('string'),

  anime: DS.belongsTo('anime')
        
});
