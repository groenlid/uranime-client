module.exports = {
    options: {
        configFile: 'karma.conf.js',
        browsers: ['Chrome'],
        reporters: ['coverage','dots']
    },
    ci: {
        singleRun: true,
        browsers: ['PhantomJS']
    },
    test: {
        singleRun: true,
        browsers: ['Firefox']
    },
    server: {
        singleRun: false,
        autoWatch: true
    },
    browsers: {
        singleRun: true,
        browsers: ['Chrome','ChromeCanary','Firefox','PhantomJS']
    }
};
