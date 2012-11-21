App.Anime = DS.Model.extend({
	
	title: DS.attr('string'),
	desc: DS.attr('string'),
	image: DS.attr('string'),
	fanart: DS.attr('string'),
	status: DS.attr('string'),
	runtime: DS.attr('number'),
	classification: DS.attr('string'),
	type: DS.attr('string'),
	
	episode: DS.hasMany('App.Episode', {embedded:true}),
	
	imageURL: function(){
		var image = this.get('image');
		return (image == null) ? "" : App.Config.get('imagepath') + this.get('image');
	}.property('image'),

    imageURLSmall: function(){
        var width = 200;
		var image = this.get("image");
		var fallbackImage = App.Config.get('noImageYet');//"http://placehold.it/200x112&text=No+image+yet";
		return (image == null) ? fallbackImage : App.Config.get('imageresizepath') + this.get('image') + "/" + width;
    }.property('image'),

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
			
			// Check if the episode is after todays date
			if(!Ember.none(item.get('aired')) && new Date(item.get('aired')) < new Date())
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
  		
  	}.property('episode.@each'),
	
	sortedEpisodes: function () {
	  var items = this.get('episode').toArray();
	  return items.sort(function (lhs, rhs) {
		return Date.parse(rhs.get('aired')) - Date.parse(lhs.get('aired'));
	  });
	}.property('episode.@each.aired'),
	
	hasFutureEpisodes: function() {
		var episodesAirDate = this.get('episode').getEach('aired');
		var hasFuture = false;
		
		_.each(episodesAirDate, function(content){
			if(!Ember.none(content) && new Date(content) > new Date())
				hasFuture = true;
		});
		
		return hasFuture;
	}.property('episode.@each.aired'),

  	didLoad: function() {
        console.log('Anime loaded', this.toJSON());
    }
});


App.Anime.reopenClass({
	addRoot: true
});
