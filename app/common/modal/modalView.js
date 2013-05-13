App.ModalView = Ember.View.extend({
        classNames: ['modal','in'],
        
        // Default config object
        config: {
                backdrop: 'static',
                keyboard: 'false',
                show: true
        },

        didInsertElement: function() {
            this._super();
            this.$().modal(this.get('config'));
        },
    
    
        willDestroyElement: function() {
            $(this.$()).modal('hide');
        }
});
