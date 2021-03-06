App.Library = DS.Model.extend({
        
  total: DS.attr('number'),
  progress: DS.attr('number'),
  last_seen: DS.attr('date'),
    
  anime: DS.belongsTo('anime'),
  user: DS.belongsTo('user'),
        
  incomplete: function(){
    return this.get('progress') < this.get('total');
  }.property('total','progress'),

  percent: function(){
    return this.get('progress') / this.get('total') * 100;
  }.property('total','progress'),

  percentStyle: function(){
    return "width:" + this.get('percent') + "%;";
  }.property('percent'),

});
