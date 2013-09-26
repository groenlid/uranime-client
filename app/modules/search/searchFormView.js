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
        
        inlinesearch: function(){
                var parent = this.get('parentView'),
                    hidden = !parent.get('showResult'),
                    value = this.get('value'),
                    store = this.get('controller.store'),
                    result;
                
                if(hidden) return Ember.debug('The search was activated with enter, so skipping inline-search.');
                
                result = store.find('search', {title:value});
                this.set('result', result);
        },

        searchField: Ember.TextField.extend({

            valueBinding: 'parentView.value',

            // Start the timer
            onValueChange: function(){
                var that = this,
                    parent = this.get('parentView'),
                    scheduled = this.get('scheduled');
                
                // Cancel any planned runs
                Ember.run.cancel(scheduled);

                // Make some new plans
                scheduled = Ember.run.later(parent,parent.get('inlinesearch'),1500);

                this.set('scheduled', scheduled);
            }.observes('value'),

            insertNewline: function(){
                var val = this.get('value');
                this.get('controller').send('search', {query:val});
                this.get('parentView.parentView').set('showResult', false);
            }
        })

    }),

});
