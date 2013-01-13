require('uranime/core');

/**
	The application router that defines the main states of the application 
	and their associatied urls.
*/
App.Router = Ember.Router.extend({
	enableLogging: true
});

App.Router.map(function(match) {
	match('/').to('front');
	match('/anime/:id').to('anime', function(match) {

		match('/').to('description');
		match('/episodes').to('episodes');
	
	});

	match('/community').to('community');
	match('/search/:query').to('search');

});

App.AnimeRoute = Ember.Route.extend({
	model: function(params){
		var content = App.Anime.find(params.id);
		return content;
	},

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