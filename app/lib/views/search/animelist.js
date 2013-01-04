App.AnimeListView = Ember.CollectionView.extend({
    
    classNames: ['anime-gallery'],
    
    itemViewClass: Ember.View.extend({
        templateName: function(){
            
            var viewType = this.get('parentView.parentView.controller.viewType');

            console.log(viewType);
            var view = Ember.none(viewType) ? 'animePoster' : viewType;
            return "uranime/~templates/animeCollection/" + view;
            
        }.property('parentView.parentView.controller.viewType'),
        
        _templateChanged: function() {
            this.rerender();
          }.observes('templateName'),

        goToAnime: function(e,a){
            console.log("going to anime");
            var id = e.context.get("id");
            App.get('store').find(App.Anime,{id:id});
            App.get('router').send('goToAnime', {id: id});
        }
    }),
    
    emptyView: Ember.View.extend({
        templateName: "uranime/~templates/animeCollection/loadingOrEmpty"
    }),
});
