var get = Ember.get;

App.AnimeView = Em.View.extend({
	templateName: "anime/anime",

	percentageSeen: function(){
		var episodes, seen, total;

		episodes = Ember.get(this, 'controller.content.details.episodes');
		seen = episodes.filterBy('seen').get('length');
		total = get(episodes, 'length');

		return (total === 0) ? 0 : seen / total * 100;
	}.property('controller.content.details.episodes.@each.seen'),

	percentageSeenStyle: function(){
		return "width:%@%".fmt(get(this, 'percentageSeen'));
	}.property('percentageSeen')
});
