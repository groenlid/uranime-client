App.RESTAdapter = DS.RESTAdapter.extend({ 
  	bulkCommit:false,
  	
    plurals: {
  	  'anime':'anime',
      'episode': 'episode',
      'episodes': 'episodes',
      'userepisodes': 'userepisodes',
      'last_seen': 'last_seen'
    },
  
    mappings: {
      userepisodes: 'App.UserEpisode',
      episodes: 'App.Episode',
      genre: 'App.Genre',
      last_seen: 'App.SeenActivity'
    },

    url: 'http://localhost:3000', 
	
	findQuery: function(store, type, query, recordArray) {
    var root = this.rootForType(type);
	  var that = this;
	  var ajaxQuery = null;
	  var url = this.buildURL(root);
	  if(type == 'App.Anime' && !Ember.none(query.title))
		  url = this.url + '/' + App.Config.get('search') + query.title, pluralize = false;
	  else if (!Ember.none(query.id))
        url += '/' + query.id, pluralize = true;
    else
      ajaxQuery = query;

    this.ajax(url, "GET", {
    data: ajaxQuery,
    success: function(json) {
		  if(!Ember.none(type.addRoot) && type.addRoot)
			json = that.addRootNode(json, type, pluralize)
			
          json = this.loadAssociationsFromJSON(store,type,json);
        
          this.didFindQuery(store, type, json, recordArray);
        }
      });
    },
  
    find: function(store, type, id) {
      var root = this.rootForType(type);
	  var that = this;
	  
      this.ajax(this.buildURL(root, id), "GET", {
        success: function(json) {
		  if(!Ember.none(type.addRoot) && type.addRoot)
			json = that.addRootNode(json, type, false)
			
		  json = this.loadAssociationsFromJSON(store,type,json);
			
          this.didFindRecord(store, type, json, id);
        }
      });
    },
    
    addRootNode: function(json, type, plural){
		var newJson = {};
		newJson[this.rootForType(type)] = plural ? [json] : json;
		return newJson;
	},
	
	loadAssociationsFromJSON: function(store, type, json){
		// Check if it is an array or an object
		var that = this;
		var inQuestion = json[this.rootForType(type)];
		
		if(Ember.isArray(inQuestion))
			_.each(inQuestion, function(object, index){
				json[that.rootForType(type)][index] = that.loadAssociations(store, type, object);
			});
		else
			json[that.rootForType(type)] = that.loadAssociations(store, type, inQuestion);
		//console.log(json);
		return json;
	},
	
	loadAssociations: function(store, type, json) {
		
		if(type == 'App.Anime')
		{
			// load episodes
			json = this.loadHasManyAssociation(store, App.Episode, 'episodes', json);
      json = this.loadHasManyAssociation(store, App.Genre, 'genre', json);
      json = this.loadHasManyAssociation(store, App.SeenActivity, 'last_seen', json);

		}
    if(type == 'App.Episode')
    {
      this.loadAssociationsFromJSON(store, App.UserEpisode, json);
      json = this.loadHasManyAssociation(store, App.UserEpisode, 'userepisodes',json);
    }
		if(type == 'App.UserEpisode')
    {
      json = this.loadBelongsToAssociation(store, App.User, 'user', json);
    }
		return json;
	},

	loadBelongsToAssociation: function(store, type, foreignKey, json) {
    var tmpId = store.load(type, json[foreignKey]);
    json[foreignKey] = tmpId.id;
    return json;
  },
	
  loadHasManyAssociation: function(store, type, foreignKey, json) {
		var newIds = [];
		_.each(json[foreignKey], function(content){
			var tmpId = store.load(type, content);
			newIds.push(tmpId.id);
		});
		json[foreignKey] = newIds;
		return json;
	}
	
});
