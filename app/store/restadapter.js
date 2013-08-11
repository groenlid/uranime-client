App.RESTAdapter = DS.RESTAdapter.extend({ 
  	bulkCommit:false,
  
    mappings: {
      user_episode: 'App.UserEpisode',
      episodes: 'App.Episode',
      genre: 'App.Genre',
      last_seen: 'App.SeenActivity'
    },
    namespace: 'api',
    //url: 'http://localhost:3000',
    //url: 'http://uranime.azurewebsites.net',
    url: 'http://groenlid.no-ip.org',

  ajax: function(url, type, hash) {
    hash.url = url;
    hash.type = type;
    hash.dataType = 'json';
    hash.contentType = 'application/json; charset=utf-8';
    if(type === 'PUT' || type === 'POST') 
      hash.contentType = 'application/json; charset=utf-8';
    else 
      hash.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';

    hash.context = this;

    if (hash.data && type !== 'GET') {
      hash.data = JSON.stringify(hash.data);
    }

    jQuery.ajax(hash);
  },

	findQuery: function(store, type, query, recordArray) {
    var root = this.rootForType(type);
	  var that = this;
	  var ajaxQuery = null;
	  var url = this.buildURL(root);
    var pluralize = false;
	  if(type == 'App.Anime' && !Ember.isNone(query.title))
		  url = this.url + '/' + App.Config.get('search') + query.title, pluralize = false;
	  else if (!Ember.isNone(query.id))
        url += '/' + query.id, pluralize = true;
    else
      ajaxQuery = query;

    this.ajax(url, "GET", {
    data: ajaxQuery,
    success: function(json) {
		  if(!Ember.isNone(type.addRoot) && type.addRoot)
			json = that.addRootNode(json, type, pluralize)
			
          //json = this.loadAssociationsFromJSON(store,type,json);
        
          this.didFindQuery(store, type, json, recordArray);
        }
      });
    },
  
    find: function(store, type, id) {
      var root = this.rootForType(type);
	    var that = this;
	  
      this.ajax(this.buildURL(root, id), "GET", {
        success: function(json) {
		      
          if(!Ember.isNone(type.addRoot) && type.addRoot)
            json = that.addRootNode(json, type, false)
			
		        //json = this.loadAssociationsFromJSON(store,type,json);
			
            this.didFindRecord(store, type, json, id);
        }
      });
    },
    
  findAll: function(store, type, since) {
    var root = this.rootForType(type), that = this, pluralize = false;
    this.ajax(this.buildURL(root), "GET", {
      data: this.sinceQuery(since),
      success: function(json) {
        if(!Ember.isNone(type.addRoot) && type.addRoot)
          json = that.addRootNode(json, type, pluralize)
        
        //json = this.loadAssociationsFromJSON(store,type,json);
        this.didFindAll(store, type, json);
      }
    });
  },

  addRootNode: function(json, type, pluralize){
    var newJson = {}, 
       rootNode = this.pluralizeIfNeeded(json, type, pluralize);
    
    newJson[rootNode] = pluralize ? [json] : json;
    return newJson;
  },

  
  pluralizeIfNeeded: function(json, type, pluralize){
    var name = this.rootForType(type), 
        plurals = this.serializer.configurations.get('plurals'),
        rootNode = (plurals && plurals[name] && (pluralize || Ember.isArray(json))) ? plurals[name] : this.rootForType(type);
        return rootNode;
  },
	
});

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


App.RESTAdapter.map(App.Anime, {
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


App.RESTAdapter.map(App.UserEpisode, {
        /*user: {
          embedded: 'load'
        },
        episode: {
          embedded: 'load'
        }*/
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
