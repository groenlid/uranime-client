require('uranime/core');

App.Router = Ember.Router.extend({
  enableLogging: true,

  root: Ember.Route.extend({
	  
		goToSearch: Ember.Route.transitionTo('search'),
	  
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

			goToAnime: Ember.Route.transitionTo('anime.animeDesc'),
			
			connectOutlets: function( router, context ){ // context is the query
				console.log("The query is: '" + context.query + "'");
				// STATES
				router.get('applicationController').connectOutlet('search', App.store.find(App.Anime,{title:context.query}));
			}
		})
	})
});
