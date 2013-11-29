module.exports = {
    app: {
        src: [
                'app/**/*.js'
            ]
    },
    
    tooling: {
        src: [
            'Gruntfile.js',
            'grunt/**/*.js'
        ],
        options: { jshintrc: 'grunt/.jshintrc' }
    },
    tests: {
        src: [
            'tests/**/*.js'
             ]
    },
    options: {
        jshintrc: '.jshintrc',
        force: true
    }
};
