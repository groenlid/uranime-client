App.EpisodeDetails = DS.Model.extend({

    userEpisodes: DS.hasMany('userEpisode'),

    arrangedUserEpisode: function(){
        return this.get('userEpisodes').toArray().sort(function (lhs, rhs) {
            return moment(rhs.get('timestamp'), App.Config.serverDateFormat).diff(moment(lhs.get('timestamp'), App.Config.serverDateFormat));
        });
	}.property('userEpisodes.@each'),

 

});
