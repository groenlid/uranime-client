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

/*
	insertNewline: function(event) {
		event.preventDefault();
		var searchQuery = this.get('value');
		this.get('controller').send('search', {query:searchQuery});
	},*/

});

/*
<li id="ember563" class="ember-view relative">    
    <a href="#" id="notification" rel="popover" data-title="title" data-content="content">
        <span class="label label-danger">2</span>
    </a>
    <div class="popover bottom" id="notifications" style="width:250px;display: block;" data-bindattr-1="1">
        <div class="arrow"></div>
        <div class="popover-inner">
            <div class="popover-title"><input type="text" placeholder="Search for anime"></div>
            <div class="popover-content">
                
                <div class="row">
                    
                    
                </div>
                
            </div>
        </div>
    </div>
</li>
*/