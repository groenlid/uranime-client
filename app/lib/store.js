require('uranime/core');
require('uranime/restadapter');
App.store = DS.Store.create({
  revision: 7,
  
  adapter: App.RESTAdapter.create(),
});
