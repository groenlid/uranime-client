App.UserEpisode = DS.Model.extend({
        
  timestamp: DS.attr('string'),
  
  episode: DS.belongsTo('App.Episode', { embedded: true}),

  user: DS.belongsTo('App.User', { embedded: true }),

  since: function(){
    var then = moment(this.get('timestamp')), now = moment();
    return then.from(now);
  }.property('timestamp'),

}).reopenClass({
  url: 'userepisodes',
  addRoot: true
});
