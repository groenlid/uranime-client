require('uranime/core');
require('uranime/restadapter');
App.store = DS.Store.create({
  revision: 10,
  
  adapter: App.RESTAdapter.create(),
});
