App.AnimeListView = Ember.CollectionView.extend({
    
    classNames: ['anime-gallery'],
    
    itemViewClass: Ember.View.extend({
        templateName: "uranime/~templates/anime/animePoster",
    
        goToAnime: function(e,a){
            console.log("going to anime");
            var id = e.context.get("id");
            App.get('store').find(App.Anime,{id:id});
            App.get('router').send('goToAnime', {id: id});
        }
    }),
    
    emptyView: Ember.View.extend({
        template: Ember.Handlebars.compile("<h1>The collection is empty. Here, have a cat..</h1><img class='posterimage' src='./assets/img/mascot.jpg'>")
    }),
});
