App.Episode = DS.Model.extend({
        
    name: DS.attr('string'),
    number: DS.attr('number'),
    aired: DS.attr('string'),
    special: DS.attr('boolean'),
    description: DS.attr('string'),
    image: DS.attr('string'),

    anime: DS.belongsTo('App.Anime'),

    userEpisodes: DS.hasMany('App.UserEpisode'),

    arrangedUserEpisode: function(){
        return this.get('userEpisodes').toArray().sort(function (lhs, rhs) {
            return moment(rhs.get('timestamp'), App.Config.get('serverDateFormat')).diff(moment(lhs.get('timestamp'), App.Config.get('serverDateFormat')));
        });
	}.property('userEpisodes.@each'),

    imageURL: function(){
        var image = this.get('image');
        return Ember.isNone(image) || Ember.isNone(this.get('anime.id')) ? 
            this.get('anime.fanartURL') : 
            App.Config.get('episodepath') + this.get('anime.id') + '/' + this.get('image');
    }.property('image', 'anime.id'),
   
    parseAired: function(){
        var aired = this.get('aired');
        if(!Ember.isNone(aired))
            return moment(aired).calendar();
    }.property('aired'),

    shortDescription: function(){
        var desc = this.get('description');
        if(Ember.isNone(desc) || desc.length <= App.Config.get('shortDescriptionLength'))
            return desc;

        return desc.substr(0, App.Config.get('shortDescriptionLength')) + "...";

    }.property('description', 'App.Config.shortDescriptionLength'),
});

App.Episode.reopenClass({
    addRoot: true,
    url: 'episodes'
});