App.AnimeDescriptionView = Em.View.extend({
    templateName: "anime/description/animeDescription",

    showTags: false,

    toggleTags: function(evt){
        this.toggleProperty('showTags');
    }
});
