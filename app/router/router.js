/**
	The application router that defines the main states of the application 
	and their associatied urls.
*/
App.Router = Ember.Router.extend({
	enableLogging: true
});

App.Router.map(function() {
	this.route('front', { path:'/'});
	
    this.resource('animeoverview', {path: '/animeoverview/:after/:before'});

	this.resource('anime', { path: '/anime/:anime_id' }, function(){
		this.route('description', { path: '/' } );
		this.route('episodes');
	});

	this.route('community');

	this.route('search', { path: '/search/:query' });

	this.resource('user', { path: '/user/:user_id' }, function(){
		this.route('profile', { path: '/'});
		this.route('library');
	});

	this.resource('requests', function(){
		this.resource('request', { path: '/:request_id' });
	});

	this.resource('calendar', { path: '/calendar/:week'});

});

App.RequestsRoute = Ember.Route.extend({
	model: function(params){
		return App.store.findAll(App.Request);
	}
});


App.ApplicationRoute = Ember.Route.extend({
    actions: {
        search: function(query) {
            this.controllerFor('search').set('query', query);
            this.router.transitionTo('search', this.get('store').find('anime',{title:query}));
        },

        goToLibrary: function(user){
            this.router.transitionTo('user.library', user);    
        },

        // Show and hide the modals
        showModal: function(modal, content, options){
            var controller = this.controllerFor(modal);
                controller.setProperties(options);
                controller.set('content', content);
                this.render(modal, {
                    into: 'application',
                    outlet: 'modal',
                });
        },
        hideModal: function(){
                this.disconnectOutlet({ 
                    parentView: 'application', 
                    outlet:'modal'
                });
        }

    }
});

App.CalendarRoute = Ember.Route.extend({
	setupController: function(controller, params){
		controller.set('content', this.get('store').find('episode', {week: params.week}));
        controller.set('params', params);
	},

	actions: {
            goToWeek: function(week) {
                    this.router.transitionTo('calendar', App.Episode.find({week:week}));
            }
        }
});

App.AnimeoverviewRoute = Ember.Route.extend({
    setupController: function(controller, params){
        controller.set('popular_anime', this.get('store').find('anime', {limit:10, orderBy: 'popularity'}));
        controller.set('content', this.get('store').find('anime', { before: params.before, after: params.after}));
        controller.set('params', params);
    }
});

App.AnimeRoute = Ember.Route.extend({
    
});

App.AnimeDescriptionRoute = Ember.Route.extend({
	renderTemplate: function() {
		var controller = this.controllerFor('anime');
		this.render({ controller: controller });
	},
});

App.AnimeEpisodesRoute = Ember.Route.extend({

	setupController: function(controller, model){
		controller.set('anime',this.controllerFor('anime').get('content'));
	}
});

App.UserLibraryRoute = Ember.Route.extend({
    setupController: function(controller){
        var user_id = this.modelFor('user').get('id'),
            library = this.get('store').find('library', {user_id: user_id});
               
        controller.set('content', library);
    }


});

App.CommunityRoute = Ember.Route.extend({
	model: function(params){
		return this.get('store').find('userEpisode', {limit:10});
	}
});

App.SearchRoute = Ember.Route.extend({
  model: function(params){
    return this.get('store').find('anime', {title: params.title});
  },
  /*deserialize: function(params){
  	return App.Anime.find({title:params.query});
  },*/

  serialize: function(params){
  	return {query: params.query.title}
  },

});
