App.SearchController = Ember.ArrayController.extend({
    sortProperties: function(){
        var chosenSort = this.get('chosenSort'),
            sortTypes = this.get('sortTypes');
        if(Ember.isNone(chosenSort))
            return sortTypes.get('firstObject.value.sortProperty');
        return [chosenSort.get('value.sortProperty')];
    }.property('chosenSort'),//['title'],

    sortAscending: true,
    viewType: 'animePoster',
    
    viewTypes: Ember.A([
        Ember.Object.create({
            icon: 'glyphicon glyphicon-th',
            viewType: 'animePoster'
        }),
        Ember.Object.create({
            icon: 'glyphicon glyphicon-th-large',
            viewType: 'animeFanart'
        }),
        Ember.Object.create({
            icon: 'glyphicon glyphicon-list',
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

    changeViewType: function(context){
        this.set('viewType', context.get('viewType'));
    }
});
