Ember.Handlebars.helper('concat', function(value, prop){
    var defaultLength = App.Config.shortDescriptionLength,
    length = prop.hash.length || defaultLength;
    
    if(Ember.isNone(value) || value.length <= length)
        return value;

    return value.substr(0, length) + "...";

});
