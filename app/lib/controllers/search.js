App.SearchController = Ember.ArrayController.extend({
    sortProperties: ['title'],
    sortAscending: true,
    
    viewType: 'animePoster',
    
    viewTypes: Ember.A([
        Ember.Object.create({
            icon: 'icon-th',
            viewType: 'animePoster'
        }),
        Ember.Object.create({
            icon: 'icon-th-large',
            viewType: 'animeFanart'
        }),
        Ember.Object.create({
            icon: 'icon-list',
            viewType: 'animeList'
        }),

    ]),

    changeViewType: function(evt){
        var context = evt.context;
        console.log(evt, this.get('viewType'));
        this.set('viewType', context.get('viewType'));
        console.log(this.get('viewType'));
    }
});
