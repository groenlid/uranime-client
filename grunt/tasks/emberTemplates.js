module.exports = {
    options: {
        templateName: function(sourceFile) {
            return sourceFile.replace(/app\/templates\//, '');
        },
        precompile: true
    },
    debug: {
        files: {
            'build/templates.js': ["app/templates/**/*.handlebars"],
        },
        options: {
            precompile: false
        }
    }
};
