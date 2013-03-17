/*jshint indent: 2 */
/*global require, module, test, ok, App */

require('uranime/core');
require('uranime/views/search/search');
require('uranime/views/search/animelist');

var application, searchView;
module("search", {
  setup: function () {
    //application = Ember.Application.create();
  },

  teardown: function () {
    //searchView.destroy();
    //application.destroy();
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