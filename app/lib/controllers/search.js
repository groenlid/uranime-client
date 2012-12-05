App.SearchController = Ember.ArrayController.extend({
    sortProperties: function(){
        return [this.get('chosenSort.value.sortProperty')];
    }.property('chosenSort'),//['title'],

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
            viewType: 'animeInfoList'
        }),
    ]),

    sortTypes: Ember.A([
        Ember.Object.create({
            label: 'Title',
            value: Ember.Object.create({
                sortProperty: ['title'],
                sortAscending: true
            })
        }),
        Ember.Object.create({
            label: 'Age',
            value: Ember.Object.create({
                sortProperty: ['age'],
                sortAscending: true
            })
        }),
        Ember.Object.create({
            label: 'Rating',
            value: Ember.Object.create({
                sortProperty: ['rating'],
                sortAscending: true
            })
        }),
    ]),

    changeViewType: function(evt){
        var context = evt.context;
        console.log(evt, this.get('viewType'));
        this.set('viewType', context.get('viewType'));
        console.log(this.get('viewType'));
    }
});
