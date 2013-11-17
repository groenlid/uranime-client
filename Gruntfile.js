/*jshint camelcase: false */
/*global module:false */
module.exports = function(grunt) {
    
    require('time-grunt')(grunt);

    var config = require('load-grunt-config')(grunt, {
        configPath: 'grunt/tasks',
        init:false
    }),
        _ = grunt.util._;
    
    config.env = process.env;

    // Main tasks

    grunt.registerTask('default', "Build (in debug mode) & test your application.", ['test']); 

    // Servers
    // -------------------
    grunt.registerTask('server', "Run your server in development mode, auto-rebuilding when files change.", [
                       'clean:debug',
                       'build:debug',
                       'watch'
                       ]);

    // Testing
    // -------
    grunt.registerTask('test', "Run your apps's tests once. Uses Google Chrome by default. Logs coverage output to tmp/result/coverage.", [
                     'clean:debug', 'build:debug', 'karma:test' ]); 

  
    

    // Worker tasks
    // ------
    grunt.registerTask('build:debug', [
                       'jshint:tooling',
                       'concurrent:buildDebug', // Executed in parallel, see config below
                       ]);


  // Parallelize most of the build process
  _.merge(config, {
    concurrent: {
      buildDist: [
        "buildTemplates:dist",
        "buildScripts",
        "buildStyles",
        "buildIndexHTML:dist"
      ],
      buildDebug: [
        "buildTemplates:debug",
        "buildScripts",
        "buildStyles",
        "buildIndexHTML:debug"
      ]
    }
  });

  // Templates
  grunt.registerTask('buildTemplates:dist', [
                     'emblem:compile',
                     'emberTemplates:dist'
                     ]);

  grunt.registerTask('buildTemplates:debug', [
                     'emblem:compile',
                     'emberTemplates:debug'
                     ]);

  // Scripts
  grunt.registerTask('buildScripts', [
                     'copy:javascriptToTmp',
                     'transpile',
                     'jshint:app',
                     'jshint:tests',
                     'concat_sourcemap'
                     ]);

  // Styles
  grunt.registerTask('buildStyles', [
                     'compass:compile',
                     'sass:compile',
                     'less:compile',
                     'stylus:compile',
                     'copy:cssToResult'
                     // ToDo: Add 'autoprefixer'
                     ]);

  // Index HTML
  grunt.registerTask('buildIndexHTML:dist', [
                     'preprocess:indexHTMLDistApp',
                     'preprocess:indexHTMLDistTests'
                     ]);

  grunt.registerTask('buildIndexHTML:debug', [
                     'preprocess:indexHTMLDebugApp',
                     'preprocess:indexHTMLDebugTests'
                     ]);

  grunt.initConfig(config);
};
