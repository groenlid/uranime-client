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
     * Normalize the payload so that every $.ajax call gets a 
     * root node associated with that model.
     */
    normalizePayload: function(type, payload) {
        var newPayload = {};
        newPayload[type.typeKey] = payload;      
        return newPayload;
    }
});

App.UserSerializer = DS.RESTSerializer.extend({
    attr: {
        userEpisodes: { embedded: 'load' }
    }
});

App.EpisodeSerializer = DS.RESTSerializer.extend({
    attr: {
        userEpisodes: { embedded: 'load' }
    }
});

