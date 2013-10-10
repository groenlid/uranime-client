App.FrontView = Em.View.extend({
	templateName: "front/front",

    didInsertElement: function(){
        $('.carousel').carousel({
            interval: 5000
        });
    },

    searchField: Ember.TextField.extend({
        /*
         insertNewline: function(){
            var val = this.get('value');
            this.get('controller').send('search', {query:val});
        }
        */
    })
});
