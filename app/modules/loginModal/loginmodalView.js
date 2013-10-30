App.LoginmodalView = App.ModalView.extend({
    templateName: "loginmodal/loginmodal",

    showLoginError: Ember.computed.gt('controller.failedAttempts',0)
});
