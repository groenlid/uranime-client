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

	this.resource('requests', function(){
		this.resource('request', { path: '/:request_id' });
	});

	this.resource('calendar', { path: '/calendar/:week'});

});

App.RequestsRoute = Ember.Route.extend({
	model: function(params){
		
		/*var requests = [
		{
			id:1,
			title: 'Dragon Ball Kai',
			fanart: 'http://urani.me/attachments/photos/orginal/4f2a552e-5a20-4ebd-aea1-18379e27ab78.jpg',
			poster: 'http://urani.me/attachments/photos/orginal/4f2a551f-312c-446b-a18f-18379e27ab78.jpg',
			user: 1,
			status: 'created',
			percentage: '9000'
		},
		{
			id:2,
			title: 'Yu-Gi-Oh',
			fanart: 'http://thetvdb.com/banners/fanart/original/113561-1.jpg',
			poster: 'http://thetvdb.com/banners/posters/113561-1.jpg',
			user: 3,
			status: 'created',
			percentage: 50
		},
		{
			id:3,
			title: 'Hunter x hunter',
			fanart: 'http://static.zerochan.net/Hunter.x.Hunter.full.389508.jpg',
			poster: 'http://thetvdb.com/banners/posters/252322-2.jpg',
			user: 2,
			status: 'created',
			percentage: 20
		}]
		App.store.loadMany(App.Request,requests)
		return App.store.all(App.Request);*/
		return App.store.findAll(App.Request);
	}
});

App.CalendarRoute = Ember.Route.extend({

	model: function(params){
		return params.week;
	},

	setupController: function(controller, model){
		controller.set('content',model);
		/*if(Ember.typeOf(model) == "string")
			controller.set('content', App.Episode.find({week:model}));
		else
			controller.set('content',model);*/
	},

	events: {
        goToWeek: function(week) {
          this.router.transitionTo('calendar', App.Episode.find({week:week}));
        }
      }
});

App.ApplicationRoute = Ember.Route.extend({
	events: {
        search: function(params) {
        	var query = params.query;
          	this.controllerFor('search').set('query', query);
          this.router.transitionTo('search', App.Anime.find({title:query}));
        },
        goToLibrary: function(params){
        	this.router.transitionTo('user.library', params);
        }
      }
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
	/*renderTemplate: function() {
		var controller = this.controllerFor('anime');
		this.render({ controller: controller });
	}*/
	setupController: function(controller, model){
		controller.set('anime',this.controllerFor('anime').get('content'));
	}
});

App.UserRoute = Ember.Route.extend({
	model: function(params){
		return App.User.find(params.id);
	},
});

App.UserLibraryRoute = Ember.Route.extend({
	model: function(params){
		var user_id = this.modelFor('user').get('id');
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
	/*model: function(params) {
    return App.Anime.find({title: params.query});
  },*/

  deserialize: function(params){
  	console.log("deserialize", arguments);
  	return App.Anime.find({title:params.query});
  },


  serialize: function(params){
  	console.log("serialize", arguments);
  	return {query: params.query.title}
  	//return params.query;
  },

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