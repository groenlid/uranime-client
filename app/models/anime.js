App.Anime = DS.Model.extend({
  	
    title: DS.attr('string'),
    desc: DS.attr('string'),
    image: DS.attr('string'),
    fanart: DS.attr('string'),
    status: DS.attr('string'),
    runtime: DS.attr('number'),
    classification: DS.attr('string'),
    type: DS.attr('string'),
    details: DS.belongsTo('animeDetails'),

  imageURL: function(){
  	var image = this.get('image');
  	return (image == null) ? "" : App.Config.imagepath + this.get('image');
  }.property('image'),

  imageURLSmall: function(){
      var width = 200;
  return this.generate_imageURL(width);
  }.property('image'),

  imageUrlSmallStyle: function(){
    return "background-image:url("+this.get('imageURLSmall')+")";
  }.property('imageURLSmall'),

  imageURLSmallest: function(){
    var width = 75;
    return this.generate_imageURL(width);
  }.property('image'),

  generate_imageURL: function(width){
    var image = this.get("image");
    var fallbackImage = App.Config.noImageYet;
    return (image == null) ? fallbackImage : App.Config.imageresizepath + this.get('image') + "/" + width;
  },

  fanartURL: function(){
  	var fanart = this.get("fanart");
  	return (fanart == null) ? "" : App.Config.imagepath + this.get('fanart');
  }.property('fanart'),

  fanartURLSmall: function(){
  	var width = 200;
  	var fanart = this.get("fanart");
  	var fallbackImage = App.Config.noImageYet;//"http://placehold.it/200x112&text=No+image+yet";
  	return (fanart == null) ? fallbackImage : App.Config.imageresizepath + this.get('fanart') + "/" + width;
  }.property('fanart'),

  fanartStyle: function() {
   		return "background-image:url(" + this.get('fanartURL') + ")";
  	}.property('fanartURL').cacheable(),

    isFinished: function(){
    return this.get('status') == "finished";
  }.property('status')

  });
