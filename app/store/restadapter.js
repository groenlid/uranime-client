App.ApplicationAdapter = DS.RESTAdapter.extend({ 
  	bulkCommit:false,
  
    mappings: {
      user_episode: 'App.UserEpisode',
      episodes: 'App.Episode',
      genre: 'App.Genre',
      last_seen: 'App.SeenActivity'
    },
    
    namespace: 'api',
    host: 'http://localhost:3000',
    //host: 'http://uranime.azurewebsites.net',
    //host: 'http://groenlid.no-ip.org',
    
    pathForType: function(type) {
      return type;
    }
});

App.ApplicationSerializer = DS.RESTSerializer.extend({

    normalizePayload: function(type, payload) {
      var newPayload = {};
      newPayload[type.typeKey] = payload;      
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