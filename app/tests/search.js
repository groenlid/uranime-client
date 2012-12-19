/*jshint indent: 2 */
/*global require, module, test, ok, App */

require('uranime/core');
require('uranime/views/search/search');
require('uranime/views/search/animelist');

var exampleData;

module("search", {
  setup: function () {
    searchView = App.SearchView.create();

    Ember.run(function () {
      searchView.append();
    });
  },

  teardown: function () {
    searchView.destroy();
    searchView = null;
  }
});

test("SearchView is defined", function () {
  ok(typeof App.SearchView !== 'undefined', "Searchview is undefined");
});

test("AnimeListView is defined", function () {
  ok(typeof App.AnimeListView !== 'undefined', "AnimeListView is undefined");
});

test("SearchView has an associated template", function () {
  ok(1,1);
});