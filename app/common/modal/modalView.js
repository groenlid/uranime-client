App.ModalView = Ember.View.extend({
        classNames: ['modal','in'],
        
        // Default config object
        config: {
                backdrop: false,
                keyboard: false,
                show: true
        },

        didInsertElement: function() {
            this._super();
            this.$().modal(this.get('config'));
        },
        
        willDestroyElement: function() {
            Ember.$(this.$()).modal('hide');
        }
});
