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

    options: {
        jshintrc: '.jshintrc',
        force: true
    }
};
