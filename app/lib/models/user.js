App.User = DS.Model.extend({
        
  nick: DS.attr('string'),
  joined: DS.attr('string'),
  email: DS.attr('string'),
  desc: DS.attr('string'),
  gravatar: DS.attr('string'),

  smallGravatar: function(){
    return this.get('gravatar') + "?s=30";
  }.property('gravatar'),

});
App.User.reopenClass({
  addRoot: true,
});