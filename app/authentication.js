App.Auth = Em.Auth.extend({
    request: 'jquery',
    response: 'json',

    strategy: 'token',
    tokenKey: 'auth_token',
    tokenLocation: 'authHeader',
    tokenHeaderKey: 'Auth-Token',
    tokenIdKey: 'user_id',
    
    session: 'localStorage',

    baseUrl: 'http://localhost:3000/api/',
    signInEndPoint: '/signin',
    signOutEndPoint: '/signout',
    modules: [
        'emberData',
        'rememberable'
        ],
    rememberable: {
        tokenKey: 'auth_token',
        autoRecall: true
    },
    emberData:{
        userModel: 'user' 
    }
});
