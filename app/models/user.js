App.User = DS.Model.extend({
        
  nick: DS.attr('string'),
  joined: DS.attr('string'),
  email: DS.attr('string'),
  desc: DS.attr('string'),
  gravatar: DS.attr('string'),

  userepisodes: DS.hasMany('userEpisode'),
  requests: DS.hasMany('request'),
  
  smallGravatar: function(){
    var gravatar = this.get('gravatar');
    if(!Ember.isNone(gravatar))
      return this.get('gravatar') + "?s=30&d="+encodeURIComponent(App.Config.get('defaultgravatar'));
  }.property('gravatar'),

});