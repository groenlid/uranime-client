App.User = DS.Model.extend({
        
  nick: DS.attr('string'),
  joined: DS.attr('string'),
  email: DS.attr('string'),
  desc: DS.attr('string'),
  gravatar: DS.attr('string'),

  userepisodes: DS.hasMany('App.UserEpisode'),

  smallGravatar: function(){
    var gravatar = this.get('gravatar');
    if(!Ember.isNone(gravatar))
      return this.get('gravatar') + "?s=30";
  }.property('gravatar'),

});
App.User.reopenClass({
  addRoot: true,
});