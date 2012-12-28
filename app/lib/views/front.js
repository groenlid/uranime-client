App.FrontView = Em.View.extend({
	templateName: "uranime/~templates/front",

  didInsertElement: function(){
    $('.carousel').carousel({
      interval: 5000
    });
  }
});
