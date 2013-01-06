require('moment');

App.Anime = DS.Model.extend({
	
	title: DS.attr('string'),
	desc: DS.attr('string'),
	image: DS.attr('string'),
	fanart: DS.attr('string'),
	status: DS.attr('string'),
	runtime: DS.attr('number'),
	classification: DS.attr('string'),
	type: DS.attr('string'),
	
	episodes: DS.hasMany('App.Episode', {embedded:true}),
  genre: DS.hasMany('App.Genre', {embedded:true}),
  last_seen: DS.hasMany('App.SeenActivity', {embedded:true}),

  genres: function(){
      return this.get('genre').filter(function(f){
              return f.get('is_genre') == 1
          });
  }.property('genre.@each'),
  
  tags: function(){
      return this.get('genre').filter(function(f){
              return f.get('is_genre') !== '1'
          });
  }.property('genre.@each'),
  
	imageURL: function(){
		var image = this.get('image');
		return (image == null) ? "" : App.Config.get('imagepath') + this.get('image');
	}.property('image'),

  imageURLSmall: function(){
      var width = 200;
	return this.generate_imageURL(width);
  }.property('image'),

  imageURLSmallest: function(){
    var width = 75;
    return this.generate_imageURL(width);
  }.property('image'),

  generate_imageURL: function(width){
    var image = this.get("image");
    var fallbackImage = App.Config.get('noImageYet');
    return (image == null) ? fallbackImage : App.Config.get('imageresizepath') + this.get('image') + "/" + width;
  },

fanartURL: function(){
	var fanart = this.get("fanart");
	return (fanart == null) ? "" : App.Config.get('imagepath') + this.get('fanart');
}.property('fanart'),

fanartURLSmall: function(){
	var width = 200;
	var fanart = this.get("fanart");
	var fallbackImage = App.Config.get('noImageYet');//"http://placehold.it/200x112&text=No+image+yet";
	return (fanart == null) ? fallbackImage : App.Config.get('imageresizepath') + this.get('fanart') + "/" + width;
}.property('fanart'),

fanartStyle: function() {
 		return "background-image:url(" + this.get('fanartURL') + ")";
	}.property('fanartURL').cacheable(),

/**
 * Should return the [next episode + last 3] or [last 4]
 */
	lastEpisodes: function() {
		var episodes = this.get('sortedEpisodes').toArray();
		var amount = 4;
		
		var lastAiredEpisodes = [];
		var last;
		_.each(episodes, function(item){
		if(lastAiredEpisodes.length >= amount)
			return;
		
		// Check if the episode is after todays date "2010-01-07T00:00:00+0100"
		if(!Ember.none(item.get('aired')) && moment(item.get('aired'), App.Config.get('dateFormat')).diff(moment()) < 1)
		{
			// If the lastAiredEpisodes is empty and last is defined
			if(lastAiredEpisodes.length == 0 && !Ember.none(last))
				lastAiredEpisodes.push(last);
			lastAiredEpisodes.push(item);
		}
		last = item;
	 });
		
		return lastAiredEpisodes;
		//return episodes.slice(0,amount);
		
	}.property('episodes.@each'),

  sortedEpisodes: function () {
    var items = this.get('episodes').toArray();
    if(items.length == 0)
      return items;
    return items.sort(function (lhs, rhs) {
  	 return moment(rhs.get('aired'), App.Config.get('dateFormat')).diff(moment(lhs.get('aired'), App.Config.get('dateFormat')));
    });
  }.property('episodes.@each'),

  hasFutureEpisodes: function() {
  	var episodesAirDate = this.get('episodes').getEach('aired');
  	var hasFuture = false;
  	
  	_.each(episodesAirDate, function(content){
  		if(!Ember.none(content) && new Date(content) > new Date())
  			hasFuture = true;
  	});
  	
  	return hasFuture;
  }.property('episodes.@each.aired'),

  totalRuntime: function(){
    return this.get('runtime') * this.get('episodes.length');
  }.property('episodes.length','runtime'),

  specialEpisodes: function(){
    return this.get('episodes').filterProperty('special',true).get('length');
  }.property('episodes.@each.special'),

  regularEpisodes: function(){
    return this.get('episodes.length') - this.get('specialEpisodes');
  }.property('specialEpisodes','episodes.length'),

  isFinished: function(){
    return this.get('status') == "finished";
  }.property('status'),

  toFromDates: function(){
    var sortedEpisodes = this.get('sortedEpisodes'), 
        start = moment(sortedEpisodes.get('lastObject.aired'), App.Config.get('dateFormat')).year(), 
        end = moment(sortedEpisodes.get('firstObject.aired'), App.Config.get('dateFormat')).year();

    if(start == end)
      return "(" + start + ")";
    if(this.get('isFinished'))
        return "(" + start + "-" + end + ")";
    else
      return "(" + start + "- )";
  }.property('episodes.@each.aired'),

	didLoad: function() {
    
  },

});


App.Anime.reopenClass({
	addRoot: true
});
