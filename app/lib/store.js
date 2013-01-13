require('uranime/core');
require('uranime/restadapter');
App.store = DS.Store.create({
  revision: 11,
  
  adapter: 'App.RESTAdapter',
});
