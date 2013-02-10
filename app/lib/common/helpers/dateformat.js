Ember.Handlebars.registerBoundHelper('dateformat', function(value, options) {
  escaped = Handlebars.Utils.escapeExpression(value);

  return new Handlebars.SafeString(moment(escaped).format(App.Config.get('serverDateFormat')));
});