Ember.Inflector.inflector.uncountable("anime");

App.ApplicationAdapter = DS.RESTAdapter.extend({ 
    bulkCommit:false,
    
    namespace: 'api',
    host: 'http://localhost:3000',
    //host: 'http://uranime.azurewebsites.net',
    //host: 'http://groenlid.no-ip.org',
    
});

App.ApplicationSerializer = DS.RESTSerializer.extend({

    /**
      Normalize the payload so that every $.ajax call gets a 
      root node associated with that model.
    */
    normalizePayload: function(type, payload) {
        var newPayload = {};
        newPayload[type.typeKey] = payload;      
        return newPayload;
    }

});

App.AnimeSerializer = App.ApplicationSerializer.extend({
  
    /**
        This is a temporary workaround until
        ember data includes embedded relationships.
    */
    normalizePayload: function(type, payload) {
        var newPayload = {}, ids = {}, embedded = {};

        embedded.episodes = payload.episodes;
        embedded.genres   = payload.genres;
        embedded.synonyms = payload.synonyms;
        embedded.seen     = payload.seen;

        ids.episodes      = payload.episodes.mapBy('id');
        ids.genres        = payload.genres.mapBy('id');
        ids.synonyms      = payload.synonyms.mapBy('id');
        ids.seen          = payload.seen.mapBy('id');

        payload.episodes  = ids.episodes;
        payload.genres    = ids.genres;
        payload.synonyms  = ids.synonyms;
        payload.seen      = ids.seen;

        newPayload[type.typeKey]  = payload;
        newPayload.episodes       = embedded.episodes;
        newPayload.genres         = embedded.genres;
        newPayload.synonyms       = embedded.synonyms;
        newPayload.seenActivity   = embedded.seen;

        return newPayload;
    }
});

App.UserSerializer = App.ApplicationSerializer.extend({

    /**
        This is a temporary workaround until
        ember data includes embedded relationships.
    */
    normalizePayload: function(type, payload) {
        var newPayload = {}, ids = {}, embedded = {};

        embedded.userEpisodes = payload.userEpisodes;
        
        ids.userEpisodes      = payload.userEpisodes.mapBy('id');

        payload.userEpisodes  = ids.userEpisodes;

        newPayload[type.typeKey]  = payload;
        newPayload.userEpisodes       = embedded.userEpisodes;

        return newPayload;
    }
});

App.EpisodeSerializer = App.ApplicationSerializer.extend({

    /**
        This is a temporary workaround until
        ember data includes embedded relationships.
    */
    normalizePayload: function(type, payload) {
        var newPayload = {}, ids = {}, embedded = {};

        embedded.userEpisodes = payload.userEpisodes;
        
        ids.userEpisodes      = payload.userEpisodes.mapBy('id');

        payload.userEpisodes  = ids.userEpisodes;

        newPayload[type.typeKey]  = payload;
        newPayload.userEpisodes       = embedded.userEpisodes;

        return newPayload;
    }
});

