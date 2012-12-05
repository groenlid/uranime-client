App.AnimeDescView = Em.View.extend({
	templateName: "uranime/~templates/animedesc",

	didInsertElement: function(){

		console.log('didInsert', this.get('controller.content'));
	}
});
