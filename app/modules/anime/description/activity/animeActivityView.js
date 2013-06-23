App.AnimeActivityView = Ember.CollectionView.extend({
  classNames: ['anime-gallery'],

  itemViewClass: Ember.View.extend({

    classNames: ['gallery-avatar pull-left clickable col-lg-1 spanpadding'],

    templateName: 'anime/description/activity/animeActivityItem',

    click: function(event){
      var seenActivity = this.get('content');
      this.get('controller').send('goToLibrary', seenActivity.get('user'));
    },

    episodesBinding: 'parentView.episodes',

    episodesAired: function(){
      return this.get('episodes').filter(function(item){
        return !Ember.isNone(item.get('aired')) &&
                moment(item.get('aired'), App.Config.get('serverDateFormat')).diff(moment()) < 1;
      });
    }.property('episodes.length'),

    percent: function(){
      var amount = this.get('content.amount'), episodeLength = this.get('episodesAired.length');

      // the episode

      return parseInt(amount) / parseInt(episodeLength) * 100;
    }.property('episodesAired','content.amount'),

    percentStyle: function(){
      var percent = this.get('percent');
      return 'width:' + percent + '%';
    }.property('percent'),

    incomplete: function(){
      return this.get('percent') < 100;
    }.property('percent'),
  
  }),

  emptyView: Ember.View.extend({
      tagName: 'em',
      classNames:['muted'],

      templateName: 'anime/description/activity/animeActivityEmpty'
  })
});
