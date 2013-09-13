Ember.Inflector.inflector.uncountable("anime");

App.ApplicationAdapter = DS.RESTAdapter.extend({ 
  	bulkCommit:false,
    
    /*
    mappings: {
      user_episode: 'App.UserEpisode',
      episodes: 'App.Episode',
      genre: 'App.Genre',
      last_seen: 'App.SeenActivity'
    },
    */

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

/*
App.RESTAdapter.configure('plurals', {
  anime: 'anime',
  episode: 'episodes',
  episodes: 'episodes',
  user_episode: 'user_episodes',
  last_seen: 'last_seen',
  library: 'library',
  request: 'requests',
  requestType: 'requestTypes'
})
*/
/*
App.RESTAdapter.map('App.Anime', {
  episodes: {
    embedded: 'always' // load
  },
  genres: {
    embedded: 'load'
  },
  seen: {
    embedded: 'load'
  },
  synonyms: {
    embedded: 'load'
  }
});


App.RESTAdapter.map(App.Episode, {
        userEpisodes: {
          key: 'userEpisodes',
          embedded: 'load'
        }
});


App.RESTAdapter.map(App.Library, {
  primaryKey: 'user_id',
  anime: {
    embedded: 'load'
  }
});

App.RESTAdapter.map(App.User, {
  userepisodes: {
    embedded: 'load'
  }
});

App.RESTAdapter.map(App.Request, {
  request_info: {
    embedded: 'load'
  }
});

App.RESTAdapter.map(App.RequestInfo, {
  request_attributes: {
    embedded: 'load'
  }
});
*/