Ember.Handlebars.registerBoundHelper('bgStyle', function(value, options) {
  var escaped = Handlebars.Utils.escapeExpression(value);

  return new Handlebars.SafeString(moment(escaped).format(App.Config.serverDateFormat));
});
