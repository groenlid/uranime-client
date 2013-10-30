App.Auth = Em.Auth.extend({
    request: 'jquery',
    response: 'json',
    strategy: 'token',
    tokenKey: 'auth_token',
    tokenLocation: 'authHeader',
    tokenHeaderKey: 'Auth-Token',
    tokenIdKey: 'user_id',
    session: 'cookie',
    baseUrl: 'http://localhost:3000/api/',
    signInEndPoint: '/signin',
    signOutEndPoint: '/signout',
    modules: ['emberData'],
    emberData:{
        userModel: 'user' 
    }
});
