App.Episode = DS.Model.extend({
        
    name: DS.attr('string'),
    number: DS.attr('number'),
    aired: DS.attr('string'),
    special: DS.attr('boolean'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    seen: DS.attr('boolean'),
    seenAt: DS.attr('date'),
    anime: DS.belongsTo('anime'),
    
    details: DS.belongsTo('episodeDetails'),

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
