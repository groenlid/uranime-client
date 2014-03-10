App.Library = DS.Model.extend({
        
  total: DS.attr('number'),
  progress: DS.attr('number'),
  last_seen: DS.attr('date'),
  image: DS.attr('string'),
  title: DS.attr('string'),

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

  imageUrlStyle: function(){
    return "background-image:url("+this.get('image')+")";
  }.property('image'),

});
