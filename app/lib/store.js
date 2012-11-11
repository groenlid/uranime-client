require('uranime/core');

App.store = DS.Store.create({
  revision: 7,
  
  adapter: DS.RESTAdapter.create({ 
  	bulkCommit:false,
  	
    plurals: {
  	  'anime':'anime'
    },
  
    url: 'http://groenlid.no-ip.org' 
  
  }),
});
