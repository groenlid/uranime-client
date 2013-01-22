require('uranime/core');

/**
	The application router that defines the main states of the application 
	and their associatied urls.
*/
App.Router = Ember.Router.extend({
	enableLogging: true
});

App.Router.map(function() {
	this.route('front', { path:'/'});
	
	this.resource('anime', { path: '/anime/:anime_id' }, function(){
		this.route('description', { path: '/' } );
		this.route('episodes');
	});

	this.route('community');

	this.route('search', { path: '/search/:query' });
	this.resource('user', { path: '/user/:id' }, function(){
		this.route('profile', { path: '/'});
		this.route('library');
	});
	/*
	match('/anime/:id').to('anime', function(match) {

		match('/').to('description');
		match('/episodes').to('episodes');
	
	});

	match('/community').to('community');
	match('/search/:query').to('search');

	match('/user/:id').to('user', function(match){
		match('/').to('profile');
		match('/library').to('library');

	});*/

});

App.AnimeRoute = Ember.Route.extend({
	/*model: function(params){
		return App.Anime.find(params.id);
	},*/

	setupController: function(controller, model) {
		controller.set('content', model);

		//var content = controller.get('content');
   	if(!Ember.isNone(model) && !model.get('isLoading') && Ember.isEmpty(model.get('episodes')))
   		model.reload();
  }
});

App.AnimeDescriptionRoute = Ember.Route.extend({
	renderTemplate: function() {
		var controller = this.controllerFor('anime');
		this.render({ controller: controller });
	}
});

App.AnimeEpisodesRoute = Ember.Route.extend({
	renderTemplate: function() {
		var controller = this.controllerFor('anime');
		this.render({ controller: controller });
	}
});

App.UserLibraryRoute = Ember.Route.extend({
	model: function(params){
		var user_id = this.controllerFor('user').get('content.id');
		return App.store.find(App.Library, {user_id: user_id});
	},

	setupController: function(controller, model) {
		console.log(arguments);
		controller.set('content', model);
	}
});

App.CommunityRoute = Ember.Route.extend({
	model: function(params){
		return App.store.find(App.UserEpisode, {limit:10})
	}
});

App.SearchRoute = Ember.Route.extend({
	model: function(params) {
    return params;//App.Anime.find({title: params.query});
  },

  serialize: function(params) {
  	console.log(arguments);
  	return {query: params.query};
  },

	setupController: function(controller, model){
		if(!Ember.isNone(model.query))
			controller.set('content', App.Anime.find({title: model.query}));
	}
});

/*
App.Router = Ember.Router.extend({
  enableLogging: true,

  root: Ember.Route.extend({
	  
		goToSearch: Ember.Route.transitionTo('search'),
	  goToAnime: Ember.Route.transitionTo('anime.animeDesc'),
	  goToCommunity: Ember.Route.transitionTo('community'),
	  
		index: Ember.Route.extend({
			route: '/',
			
			// EVENTS

			searchAnime: function( router, evt ){
				console.log("searching");
				router.transitionTo('search',evt);
			},

			connectOutlets: function( router ){
				//App.store.find(App.Anime, 1);
				router.get('applicationController').connectOutlet('front');
			}
		}),
		anime: Ember.Route.extend({
			route: '/anime/:id',

			connectOutlets: function( router, context) { // context is the anime
					var idValue = context.id;

					router.get('applicationController').connectOutlet('anime',App.store.find(App.Anime, idValue));
			},	

			// Transitions
			goToEpisodes: Ember.Route.transitionTo('animeEpisodes'),

			animeDesc: Ember.Route.extend({
				route: '/',

				connectOutlets: function( router, context ) {
					router.get('animeController').connectOutlet('animeDesc');
				}

			}),

			animeEpisodes: Ember.Route.extend({
				route: '/episodes',

				connectOutlets: function( router, context ) {
					router.get('animeController').connectOutlet('animeEpisodes');
				}
			})

		}),
		search: Ember.Route.extend({
			route: '/search/:query',
			
			connectOutlets: function( router, context ){ // context is the query
				console.log("The query is: '" + context.query + "'");
				// STATES
				router.get('applicationController').connectOutlet('search', App.store.find(App.Anime,{title:context.query}));
			}
		}),

		community: Ember.Route.extend({
			route: '/community',

			connectOutlets: function( router, context ){
				router.get('applicationController').connectOutlet('community', App.store.find(App.UserEpisode, {limit:10}));
			}
		})
	})
});
*/