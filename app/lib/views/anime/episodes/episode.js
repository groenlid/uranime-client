App.EpisodeView = Bootstrap.ModalPane.extend({
  templateName: "uranime/~templates/episodeModal",


  /**
   Set the height of the last active box
   based on the episode description and 
   episode image.
   */
  didInsertElement: function (){
    var content = this.get('content'), id = content.get('id');

    //$('.js-episodeInfo').outerHeight() - $('.modal-header').outerHeight();
    $('.js-commentsHeight').height(
      $('.js-episodeInfo').outerHeight() - $('.modal-header').outerHeight() - 10
    );

    // Check if the userSeen episodes has been loaded
    // If not.. load them ;)
    
    if(Ember.empty(this.get('content.userepisode')))
      App.store.find(App.Episode,{id:id});//this.set('content',);
    
  }
});