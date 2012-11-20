App.AnimeListView = Ember.CollectionView.extend({
    itemViewClass: Ember.View.extend({
        templateName: "uranime/~templates/anime/animeFanart",
        //Ember.Handlebars.compile("the letter: {{view.content.title}}")
    }),
    
    emptyView: Ember.View.extend({
        template: Ember.Handlebars.compile("<h1>The collection is empty. Here, have a cat..</h1><img class='posterimage' src='./assets/img/mascot.jpg'>")
    }),
});
