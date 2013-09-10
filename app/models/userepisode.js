App.UserEpisode = DS.Model.extend({
        
  timestamp: DS.attr('string'),
  
  episode: DS.belongsTo('episode'),

  user: DS.belongsTo('user'),

  since: function(){
    var then = moment(this.get('timestamp')), now = moment();
    return then.from(now);
  }.property('timestamp'),

});
