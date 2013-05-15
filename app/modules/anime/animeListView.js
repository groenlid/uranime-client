App.AnimeListView = Ember.CollectionView.extend({
    
    classNames: ['anime-gallery'],
    
    itemViewClass: Ember.View.extend({
        templateName: function(){
            
            var viewType = this.get('parentView.parentView.controller.viewType');

            console.log(viewType);
            var view = Ember.isNone(viewType) ? 'animePoster' : viewType;
            return "animeList/" + view;
            
        }.property('parentView.parentView.controller.viewType'),
        
        _templateChanged: function() {
            this.rerender();
          }.observes('templateName'),

    }),
    
    emptyView: Ember.View.extend({
        templateName: "animeList/loadingOrEmpty"
    }),
});
