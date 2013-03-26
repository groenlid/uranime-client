require('moment');
App.AnimeActivityView = Ember.CollectionView.extend({
  classNames: ['anime-gallery'],

  itemViewClass: Ember.View.extend({

    classNames: ['gallery-avatar pull-left clickable span1 spanpadding'],

    templateName: 'uranime/~templates/anime/description/activity/animeActivityItem',

    click: function(event){
      var content = this.get('content.user');
      this.get('controller').send('goToLibrary',content);
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

    didInsertElement: function(){
      /*
      var episodes = this.get('parentView.episodes'), 
      episodeLength = this.get('parentView.episodes.length'), 
      percent = (parseInt(this.get('content.amount')) / parseInt(episodeLength) * 100),
      title = '<span class="bold">' + this.get('content.nick') + '</span>: ' + this.get('content.since') + '<span class="muted pull-right bold">'
            + this.get('content.amount')  + "/" + episodeLength + "</span>",
      content = '<div class="smallprogress"><div class="smallprogress-filled" style="width:'+percent+'%"></div></div>';

      $('#'+this.get('elementId')).popover({
        title: title, 
        content: content,
        placement: 'top',
        html: true,
        trigger: 'hover'
      });      */
    }

  }),

  emptyView: Ember.View.extend({
      tagName: 'em',
      classNames:['muted'],

      template: Ember.Handlebars.compile("Shh.. no one has seen this yet.. It will be our little secret :)")
  })
});