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

App.CalendarRoute = Ember.Route.extend({

	model: function(params){
		return params.week;
	},

	setupController: function(controller, model){
		controller.set('content',model);
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
        goToLibrary: function(user, library){
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
                this.clearOutlet('application','modal');
        }

    }
});

App.AnimeRoute = Ember.Route.extend({

	setupController: function(controller, model) {
		controller.set('content', model);

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

	setupController: function(controller, model){
		controller.set('anime',this.controllerFor('anime').get('content'));
	}
});

App.UserLibraryRoute = Ember.Route.extend({
	model: function(params){
            var user_id = this.modelFor('user').get('id'),
		library = App.store.find(App.Library, {user_id: user_id});
                
                return library;
	}
});

App.CommunityRoute = Ember.Route.extend({
	model: function(params){
		return App.store.find(App.UserEpisode, {limit:10})
	}
});

App.SearchRoute = Ember.Route.extend({

  deserialize: function(params){
  	return App.Anime.find({title:params.query});
  },


  serialize: function(params){
  	return {query: params.query.title}
  },

});
