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
				router.get('applicationController').connectOutlet('anime');
			}
		}),
		anime: Ember.Route.extend({
			route: '/anime/:id',
			connectOutlets: function( router, context) { // context is the anime
				var idValue = context.id;
				
				//App.AnimeController.reopenClass({content:App.store.find(App.Anime,context.id)});
				router.get('applicationController').connectOutlet('anime',App.store.find(App.Anime, idValue));
			}
		}),
		search: Ember.Route.extend({
			route: '/search/:query',

			goToAnime: Ember.Route.transitionTo('anime'),
			
			connectOutlets: function( router, context ){ // context is the query
				console.log("The query is: '" + context.query + "'");
				// STATES
				router.get('applicationController').connectOutlet('search', App.store.find(App.Anime,{title:context.query}));
			}
		})
	})
});
