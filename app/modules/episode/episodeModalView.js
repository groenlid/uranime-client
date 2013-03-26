App.EpisodeView = Bootstrap.ModalPane.extend({
  templateName: "episode/episodeModal",

  
  /**
   Set the height of the last active box
   based on the episode description and 
   episode image.
   */
  didInsertElement: function (){
    var content = this.get('content'), id = content.get('id');

    // Instanciate the modal through bootstrap
    $('.modal').modal();

    //$('.js-episodeInfo').outerHeight() - $('.modal-header').outerHeight();
    $('.js-commentsHeight').height(
      $('.js-episodeInfo').outerHeight() - $('.modal-header').outerHeight() - 10
    );

    // Check if the userSeen episodes has been loaded
    // If not.. load them ;)
    
    if(Ember.isEmpty(this.get('content.userepisode')))
      App.store.find(App.Episode,{id:id});

  },

  relativeEpisode: function(relative){
    var episode = this.get('content'),
          arranged = episode.get('anime.sortedEpisodes'),
          pos = arranged.indexOf(episode),
          relative = arranged.objectAt(pos + relative);
    return relative;
  },

  previousEpisode: function(){
   return this.relativeEpisode(+1);
  }.property('content.anime.sortedEpisodes.@each','content'),

  nextEpisode: function(){
   return this.relativeEpisode(-1);
  }.property('content.anime.sortedEpisodes.@each','content'),

  hasNext: function(){
    return !Ember.isNone(this.get('nextEpisode'));
  }.property('nextEpisode'),

  hasPrevious: function(){
    return !Ember.isNone(this.get('previousEpisode'));
  }.property('previousEpisode'),

  next: function(episode){
    var nextEpisode = this.get('nextEpisode');

    if(!Ember.isNone(nextEpisode) && !nextEpisode.get('isLoading') && Ember.isEmpty(nextEpisode.get('userepisode')))
      nextEpisode.reload();
    this.set('content',nextEpisode);
  },

  previous: function(episode){
    var previousEpisode = this.get('previousEpisode');

    if(!Ember.isNone(previousEpisode) && !previousEpisode.get('isLoading') && Ember.isEmpty(previousEpisode.get('userepisode')))
      previousEpisode.reload();
    this.set('content',previousEpisode);
  },

  goToAnime: function(anime){
    var router = this.get('controller').container.lookup('router:main');
    router.transitionTo('anime.description', anime);
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.destroy();
  }
});