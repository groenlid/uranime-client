//////////////////////////////////////////////////
// A containerView that contains two views,     //
// one for the notification icon, and one popup //
// that shows when the user clicks the icon     //
//////////////////////////////////////////////////
App.SearchFormView = Ember.ContainerView.extend({
	placeholder: 'Search for anime',
    tagName: ['li'],
    classNames: ['relative'],
    childViews:['notification', 'result'],

    showResult: false,

    notification: Ember.View.extend({
        tagName: ['a'],
        classNames: ['glyphicon glyphicon-search'],

        click: function(){
            this.get('parentView').toggleProperty('showResult');
        }
    }),

    result: Ember.View.extend({
        showBinding: 'parentView.showResult',

        templateName: "search/searchForm",

        classNameBindings:['show::hidden'],

        searchField: Ember.TextField.extend({
            insertNewline: function(){
                var val = this.get('value');
                this.get('controller').send('search', {query:val});
                this.get('parentView.parentView').set('showResult', false);
            }
        })
    }),

});