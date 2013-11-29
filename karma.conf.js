module.exports = function(config){
    config.set({

        // list of files / patterns to load in the browser
        files: [
          'dependencies/minispade.js',
          'dependencies/jquery/jquery.js',
          'dependencies/moment/moment.js',
          'dependencies/handlebars/handlebars.js',
          'dependencies/ember/ember.js',
          'dependencies/ember-data/ember-data.js',
          'dependencies/cldr-1.0.0.js',
          'dependencies/i18n.js',
          'dependencies/bootstrap/dist/js/bootstrap.js',
          'dependencies/ember-auth/dist/ember-auth.js',
          'dependencies/ember-auth-request-jquery/dist/ember-auth-request-jquery.js',
          'dependencies/ember-auth-response-json/dist/ember-auth-response-json.js',
          'dependencies/ember-auth-strategy-token/dist/ember-auth-strategy-token.js',
          'dependencies/ember-auth-session-cookie/dist/ember-auth-session-cookie.js',
          'dependencies/ember-auth-module-ember-data/dist/ember-auth-module-ember-data.js',
          'build/templates.js',
          'build/application.js',
          'tmp/tests.js',
          'tests/test_helper.js',
        ],

        frameworks: ['qunit'],

        plugins: [
          'karma-qunit',
          'karma-coverage',
          'karma-phantomjs-launcher',
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          //'karma-safari-launcher'  // npm install karma-safari-launcher
        ],

        preprocessors: {
          'build/application.js': 'coverage'
        },

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters: 'coverage',

        coverageReporter: {
          type : ['text'],
          dir : 'coverage/'
        },

        // web server port
        port: parseInt(process.env.PORT, 10) + 1 || 9876,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false

    });
};
