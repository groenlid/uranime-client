module.exports = {
    options: {
        useStrict: true,
        stringModule: true,
        renameRequire: true,
        removeFileExtension: true
      },
    app: {
        files:{
            'build/application.js' : ['app/**/*.js']
        }
    },
    tests: {
        files: {
            'tmp/tests.js': ['tests/**/*.js']
        }
    }
};
