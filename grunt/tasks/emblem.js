module.exports = {
  compile: {
    files: {
      "build/templates_emblem.js": 'app/templates/**/*.emblem'
    },
    options: {
      root: 'app/templates/',
      dependencies: {
        jquery: 'dependencies/jquery/jquery.js',
        ember: 'dependencies/ember/ember.js',
        handlebars: 'dependencies/handlebars/handlebars.js',
        emblem: 'dependencies/emblem/dist/emblem.js'
      }
    }
  }
};
