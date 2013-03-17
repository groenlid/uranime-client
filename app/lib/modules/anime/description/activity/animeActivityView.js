require('moment');
App.AnimeActivityView = Ember.CollectionView.extend({
  classNames: ['row'],

  itemViewClass: Ember.View.extend({
    template: Ember.Handlebars.compile("<a class='thumbnail clickable'><img {{bindAttr src='view.content.gravatarSmall'}}/></a>"),
    
    click: function(event){
      var content = this.get('content.user');
      this.get('controller').send('goToLibrary',content);
    },

    classNames: ['span1 pull-left margin'],
    
    didInsertElement: function(){
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
      });
    }

  }),

  emptyView: Ember.View.extend({
      tagName: 'em',
      classNames:['muted'],

      template: Ember.Handlebars.compile("Shh.. no one has seen this yet.. It will be our little secret :)")
  }),
});