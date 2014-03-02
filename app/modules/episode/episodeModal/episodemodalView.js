App.EpisodemodalView = App.ModalView.extend({
 
  templateName: "episode/episodeModal",
  
  contentBinding: 'controller.content',
  
  /**
   Set the height of the last active box
   based on the episode description and 
   episode image.
   */
  didInsertElement: function (){
    this._super();
    var content = this.get('content'), id = content.get('id');

    this.setCommentHeight();

  },

  relativeEpisode: function(relative){
    var episode = this.get('content'),
          arranged = episode.get('anime.details.sortedEpisodes'),
          pos = arranged.indexOf(episode),
          relative = arranged.objectAt(pos + relative);
    return relative;
  },

  setCommentHeight: function(){
    $('.js-commentsHeight').height(
      $('.js-episodeInfo').outerHeight() - $('.modal-header').outerHeight() - 10
    );

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
    this.set('content',nextEpisode);
    this.setCommentHeight()
  },

  previous: function(episode){
    var previousEpisode = this.get('previousEpisode');
    this.set('content',previousEpisode);
    this.setCommentHeight()
  },

  goToAnime: function(anime){
    var router = this.get('controller').container.lookup('router:main');
    router.transitionTo('anime.description', anime);
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.destroy();
  }
});
