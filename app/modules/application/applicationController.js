App.ApplicationController = Ember.Controller.extend({
  // This is just a temporary fix for librarylink
  user: Ember.Object.create({id:1}),

  date: moment().format(App.Config.serverDateFormat)
});
