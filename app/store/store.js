require('app/store/restadapter');
App.store = DS.Store.create({
  revision: 12,
  
  adapter: 'App.RESTAdapter',
});
