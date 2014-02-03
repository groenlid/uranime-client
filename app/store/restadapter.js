Ember.Inflector.inflector.uncountable("anime");
Ember.Inflector.inflector.uncountable("animedetails");
Ember.Inflector.inflector.uncountable("episodedetails");

App.ApplicationAdapter = DS.RESTAdapter.extend({ 
    bulkCommit:false,
    
    namespace: 'api',
    host: 'http://localhost:3000',
    //host: 'http://uranime.azurewebsites.net',
    //host: 'http://groenlid.no-ip.org',
    
});

App.ApplicationSerializer = DS.ActiveModelSerializer.extend({
    /**
    * Update keyForAttribute so that it
    * expects the excact same propertyname
    * from the payload as the attributename on
    * the model
    * */
    keyForAttribute: function(attr) {
        return attr;
    },

    /**
     * Normalize the payload so that every $.ajax call gets a 
     * root node associated with that model.
     */
    extractSingle: function(store, type, payload, id, requestType){
        var newPayload = {},
            root = this.keyForAttribute(type.typeKey);

        newPayload[root] = payload;

        return this._super(store, type, newPayload, id, requestType);
    },

    extractArray: function(store, type, payload, requestType){
        var newPayload = {},
            root = this.keyForAttribute(type.typeKey),
            pluralized = Ember.String.pluralize(root);

        newPayload[pluralized] = payload;

        return this._super(store, type, newPayload, requestType);
    },

    /**
        Used by the restadapter to serialize the record into json.
    */
    serializeIntoHash: function(data, type, record, options) {
        Ember.merge(data, this.serialize(record, options));
    },


});

App.AnimeDetailsSerializer = App.ApplicationSerializer.extend({
    attrs: {
        episodes:       { embedded: 'load' },
        genres:         { embedded: 'load' },
        synonyms:       { embedded: 'load' },
        seen:           { embedded: 'load' }
    }
});

App.UserSerializer = App.ApplicationSerializer.extend({
    attrs: {
        userEpisodes:   { embedded: 'load' }
    }
});

App.EpisodeDetailsSerializer = App.ApplicationSerializer.extend({
    attrs: {
        userEpisodes:   { embedded: 'load' }
    }
});
