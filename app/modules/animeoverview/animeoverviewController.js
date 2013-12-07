App.AnimeoverviewController = Ember.ArrayController.extend(Ember.PaginationSupport, {
    
    // dataflow
    paginationInputBinding: 'arrangedContent',
    
    // pagination
    totalBinding: 'content.length',
    rangeWindowSize: 20,

    // sorting
    sortProperties: ['title']

});
