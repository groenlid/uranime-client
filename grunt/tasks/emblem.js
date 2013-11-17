module.exports = {
  compile: {
    files: {
      "tmp/result/assets/templates_emblem.js": ['app/templates/**/*.{emblem}']
    },
    options: {
      root: 'app/templates/',
      dependencies: {
        jquery: 'dependencies/jquery-1.9.1.js',
        ember: 'dependencies/ember-1.0.0.js',
        handlebars: 'dependencies/handlebars1-0.0.js',
        emblem: 'dependencies/emblem.js'
      }
    }
  }
};
