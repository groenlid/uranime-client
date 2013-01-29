App.Library = DS.Model.extend({
        
  total: DS.attr('number'),
  progress: DS.attr('number'),
    
  anime: DS.belongsTo('App.Anime'),
  user: DS.belongsTo('App.User'),
        
  incomplete: function(){
    return this.get('progress') < this.get('total');
  }.property('total','progress'),

  percent: function(){
    return this.get('progress') / this.get('total') * 100;
  }.property('total','progress'),

  percentStyle: function(){
    return "width:" + this.get('percent') + "%;";
  }.property('percent'),

  didLoad: function(){
       
  }
}).reopenClass({
  addRoot: true
});
