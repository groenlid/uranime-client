App.SortableHasManyMixin = Ember.Mixin.create({
    sortableRelations: [],
    sortableProperties: [],
    sortableAscendings: [],
    
    didLoad: function () {
        this._super();
        this.initialSort();
    },
    
    didCreate: function() {
        this._super();
        this.initialSort();
    },
    
    didUpdate: function() {
        this._super();
        this.initialSort();
    },
 
    initialSort: function() {
        var that        = this,
            relations   = this.get('sortableRelations');
 
        relations.forEach(function(relation, i) {
            
            Ember.defineProperty(that, 'arranged' + relation.capitalizeFirstLetter(), Ember.computed(function () {
                var content    = that.get(relation),
                    properties = that.get('sortableProperties'),
                    ascendings = that.get('sortableAscendings');
                
                return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
                    sortProperties: Ember.isArray(properties[i]) ? properties[i] : [properties[i]],
                    sortAscending: !Ember.isNone(ascendings[i]) ? ascendings[i] : true,
                    content: content
                });
            }).property('sortableProperties.[' + i + ']', 'sortableAscendings.[' + i + ']', relation + '.length'));
            
            that.notifyPropertyChange('arranged' + relation.capitalizeFirstLetter());
        });
    }
    
});
