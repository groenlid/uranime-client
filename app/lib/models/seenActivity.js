App.SeenActivity = DS.Model.extend({
        
  gravatar: DS.attr('string'),
  amount: DS.attr('number'),
  nick: DS.attr('string'),
  desc: DS.attr('string'),
  joined: DS.attr('string'),
  last: DS.attr('string'),
    
  since: function(){
    var then = moment(this.get('last')), now = moment();
    return then.from(now);
  }.property('last'),

  gravatarSmall: function(){
    return this.get('gravatar') + "?size=100";
  }.property('gravatar')

  //anime: DS.belongsTo('App.Anime'),
        
});


