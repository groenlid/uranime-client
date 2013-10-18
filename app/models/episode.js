App.Episode = DS.Model.extend({
        
    name: DS.attr('string'),
    number: DS.attr('number'),
    aired: DS.attr('string'),
    special: DS.attr('boolean'),
    description: DS.attr('string'),
    image: DS.attr('string'),

    anime: DS.belongsTo('anime'),

    userEpisodes: DS.hasMany('userEpisode'),

    arrangedUserEpisode: function(){
        return this.get('userEpisodes').toArray().sort(function (lhs, rhs) {
            return moment(rhs.get('timestamp'), App.Config.serverDateFormat).diff(moment(lhs.get('timestamp'), App.Config.serverDateFormat));
        });
	}.property('userEpisodes.@each'),

    imageURL: function(){
        var image = this.get('image');
        return Ember.isNone(image) || Ember.isNone(this.get('anime.id')) ? 
            this.get('anime.fanartURL') : 
            App.Config.episodepath + this.get('anime.id') + '/' + this.get('image');
    }.property('image', 'anime.id','anime.fanart'),

    fanartStyle: function() {
        return "background-image:url(" + this.get('imageURL') + ")";
    }.property('imageURL').cacheable(),
   
    parseAired: function(){
        var aired = this.get('aired');
        if(!Ember.isNone(aired))
            return moment(aired).calendar();
    }.property('aired'),

    shortDescription: function(){
        var desc = this.get('description');
        if(Ember.isNone(desc) || desc.length <= App.Config.shortDescriptionLength)
            return desc;

        return desc.substr(0, App.Config.shortDescriptionLength) + "...";

    }.property('description', 'App.Config.shortDescriptionLength'),
});
