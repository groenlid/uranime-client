App.LoginmodalController = Ember.ObjectController.extend({
    email: null,
    password: null,
    failedAttempts: 0,

    actions: {
        login: function(){
            var that = this,
                data = {
                    data: {
                        email: this.get('email'),
                        password: this.get('password')
                    }
                };
            var signin = this.auth.signIn(data).then(function(){
                that.send('hideModal');
            }, function(){
                that.incrementProperty('failedAttempts');
            });
        }
    }

});
