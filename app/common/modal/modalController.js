App.ModalController = Ember.ObjectController.extend({
        closeModal: function(){
                this.get('target.router').getHandler('Application').send('dismissModal');
        }
});
