App.FrontView = Em.View.extend({
	templateName: "front/front",

  didInsertElement: function(){
    $('.carousel').carousel({
      interval: 5000
    });
  }
});
