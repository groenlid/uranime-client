App.SearchView = Em.View.extend({
	templateName: "uranime/~templates/search",
	goToAnime: function(e,a){
		console.log("going to anime");
		var id = e.context.get("id");
		App.get('store').find(App.Anime,{id:id});
		App.get('router').send('goToAnime', {id: id});
	}
});
